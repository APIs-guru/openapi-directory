import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatapipelinesV1SdkVersion } from "./googleclouddatapipelinesv1sdkversion";
/**
 * Pipeline job details specific to the Dataflow API. This is encapsulated here to allow for more executors to store their specific details separately.
**/
export declare class GoogleCloudDatapipelinesV1DataflowJobDetails extends SpeakeasyBase {
    currentWorkers?: number;
    resourceInfo?: Map<string, number>;
    sdkVersion?: GoogleCloudDatapipelinesV1SdkVersion;
}
