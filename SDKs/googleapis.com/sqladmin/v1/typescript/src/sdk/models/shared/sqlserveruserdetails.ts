import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SqlServerUserDetails
/** 
 * Represents a Sql Server user on the Cloud SQL instance.
**/
export class SqlServerUserDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=serverRoles" })
  serverRoles?: string[];
}
