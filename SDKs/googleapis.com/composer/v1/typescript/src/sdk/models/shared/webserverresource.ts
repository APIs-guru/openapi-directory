import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WebServerResource
/** 
 * Configuration for resources used by Airflow web server.
**/
export class WebServerResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cpu" })
  cpu?: number;

  @SpeakeasyMetadata({ data: "json, name=memoryGb" })
  memoryGb?: number;

  @SpeakeasyMetadata({ data: "json, name=storageGb" })
  storageGb?: number;
}
