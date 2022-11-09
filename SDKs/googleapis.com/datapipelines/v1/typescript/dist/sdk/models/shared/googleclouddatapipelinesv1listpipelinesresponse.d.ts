import { SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDatapipelinesV1Pipeline } from "./googleclouddatapipelinesv1pipeline";
/**
 * Response message for ListPipelines.
**/
export declare class GoogleCloudDatapipelinesV1ListPipelinesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    pipelines?: GoogleCloudDatapipelinesV1Pipeline[];
}
