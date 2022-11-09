import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SqlServerDatabaseDetails
/** 
 * Represents a Sql Server database on the Cloud SQL instance.
**/
export class SqlServerDatabaseDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=compatibilityLevel" })
  compatibilityLevel?: number;

  @Metadata({ data: "json, name=recoveryModel" })
  recoveryModel?: string;
}
