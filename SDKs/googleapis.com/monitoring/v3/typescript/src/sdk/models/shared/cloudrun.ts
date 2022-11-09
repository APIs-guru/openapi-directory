import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CloudRun
/** 
 * Cloud Run service. Learn more at https://cloud.google.com/run.
**/
export class CloudRun extends SpeakeasyBase {
  @Metadata({ data: "json, name=location" })
  location?: string;

  @Metadata({ data: "json, name=serviceName" })
  serviceName?: string;
}
