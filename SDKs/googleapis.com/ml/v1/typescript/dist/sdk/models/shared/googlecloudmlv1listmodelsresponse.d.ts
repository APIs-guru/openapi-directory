import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1Model } from "./googlecloudmlv1model";
/**
 * Response message for the ListModels method.
**/
export declare class GoogleCloudMlV1ListModelsResponse extends SpeakeasyBase {
    models?: GoogleCloudMlV1Model[];
    nextPageToken?: string;
}
