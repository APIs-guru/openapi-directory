import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WebServerResource
/** 
 * Configuration for resources used by Airflow web server.
**/
export class WebServerResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=cpu" })
  cpu?: number;

  @Metadata({ data: "json, name=memoryGb" })
  memoryGb?: number;

  @Metadata({ data: "json, name=storageGb" })
  storageGb?: number;
}
