import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PrimaryAdmin
/** 
 * JSON template for primary admin in case of TEAM customers
**/
export class PrimaryAdmin extends SpeakeasyBase {
  @Metadata({ data: "json, name=primaryEmail" })
  primaryEmail?: string;
}
