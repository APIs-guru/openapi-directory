import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DatabaseConfig
/** 
 * The configuration of Cloud SQL instance that is used by the Apache Airflow software.
**/
export class DatabaseConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=machineType" })
  machineType?: string;
}
