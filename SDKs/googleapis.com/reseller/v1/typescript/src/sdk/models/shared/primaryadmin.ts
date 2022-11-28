import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PrimaryAdmin
/** 
 * JSON template for primary admin in case of TEAM customers
**/
export class PrimaryAdmin extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=primaryEmail" })
  primaryEmail?: string;
}
