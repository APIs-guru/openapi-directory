import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SqlServerUserDetails
/** 
 * Represents a Sql Server user on the Cloud SQL instance.
**/
export class SqlServerUserDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @Metadata({ data: "json, name=serverRoles" })
  serverRoles?: string[];
}
