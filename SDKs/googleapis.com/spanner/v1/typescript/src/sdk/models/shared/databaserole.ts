import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DatabaseRole
/** 
 * A Cloud Spanner database role.
**/
export class DatabaseRole extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
