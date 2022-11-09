import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DatabaseRole
/** 
 * A Cloud Spanner database role.
**/
export class DatabaseRole extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}
