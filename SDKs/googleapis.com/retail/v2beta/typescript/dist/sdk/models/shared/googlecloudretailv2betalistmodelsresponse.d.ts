import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaModel } from "./googlecloudretailv2betamodel";
/**
 * Response to a ListModelRequest.
**/
export declare class GoogleCloudRetailV2betaListModelsResponse extends SpeakeasyBase {
    models?: GoogleCloudRetailV2betaModel[];
    nextPageToken?: string;
}
