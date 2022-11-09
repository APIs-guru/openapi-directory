import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatapipelinesV1SdkVersion } from "./googleclouddatapipelinesv1sdkversion";


// GoogleCloudDatapipelinesV1DataflowJobDetails
/** 
 * Pipeline job details specific to the Dataflow API. This is encapsulated here to allow for more executors to store their specific details separately.
**/
export class GoogleCloudDatapipelinesV1DataflowJobDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=currentWorkers" })
  currentWorkers?: number;

  @Metadata({ data: "json, name=resourceInfo" })
  resourceInfo?: Map<string, number>;

  @Metadata({ data: "json, name=sdkVersion" })
  sdkVersion?: GoogleCloudDatapipelinesV1SdkVersion;
}
