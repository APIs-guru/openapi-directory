import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WebServerConfig
/** 
 * The configuration settings for the Airflow web server App Engine instance. Supported for Cloud Composer environments in versions composer-1.*.*-airflow-*.*.*.
**/
export class WebServerConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=machineType" })
  machineType?: string;
}
