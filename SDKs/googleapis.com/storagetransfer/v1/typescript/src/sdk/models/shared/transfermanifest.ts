import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TransferManifest
/** 
 * Specifies where the manifest is located.
**/
export class TransferManifest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;
}
