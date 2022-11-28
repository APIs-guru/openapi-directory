import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2PredictResponsePredictionResult } from "./googlecloudretailv2predictresponsepredictionresult";
/**
 * Response message for predict method.
**/
export declare class GoogleCloudRetailV2PredictResponse extends SpeakeasyBase {
    attributionToken?: string;
    missingIds?: string[];
    results?: GoogleCloudRetailV2PredictResponsePredictionResult[];
    validateOnly?: boolean;
}
