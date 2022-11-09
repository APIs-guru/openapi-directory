import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Secret
/** 
 * Secret provides a reference to entries in Secret Manager.
**/
export class Secret extends SpeakeasyBase {
  @Metadata({ data: "json, name=secretVersion" })
  secretVersion?: string;
}
