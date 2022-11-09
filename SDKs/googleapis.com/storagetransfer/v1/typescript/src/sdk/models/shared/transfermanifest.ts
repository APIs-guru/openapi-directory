import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TransferManifest
/** 
 * Specifies where the manifest is located.
**/
export class TransferManifest extends SpeakeasyBase {
  @Metadata({ data: "json, name=location" })
  location?: string;
}
