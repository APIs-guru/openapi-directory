import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SqlServerDatabaseDetails
/** 
 * Represents a Sql Server database on the Cloud SQL instance.
**/
export class SqlServerDatabaseDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=compatibilityLevel" })
  compatibilityLevel?: number;

  @SpeakeasyMetadata({ data: "json, name=recoveryModel" })
  recoveryModel?: string;
}
