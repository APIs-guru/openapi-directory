import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CloudRun
/** 
 * Cloud Run service. Learn more at https://cloud.google.com/run.
**/
export class CloudRun extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceName" })
  serviceName?: string;
}
