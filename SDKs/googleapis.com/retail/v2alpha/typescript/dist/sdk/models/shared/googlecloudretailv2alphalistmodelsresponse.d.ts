import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaModel } from "./googlecloudretailv2alphamodel";
/**
 * Response to a ListModelRequest.
**/
export declare class GoogleCloudRetailV2alphaListModelsResponse extends SpeakeasyBase {
    models?: GoogleCloudRetailV2alphaModel[];
    nextPageToken?: string;
}
