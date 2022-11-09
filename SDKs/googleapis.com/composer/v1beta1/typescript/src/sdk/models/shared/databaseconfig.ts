import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DatabaseConfig
/** 
 * The configuration of Cloud SQL instance that is used by the Apache Airflow software.
**/
export class DatabaseConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=machineType" })
  machineType?: string;
}
