import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaPredictResponsePredictionResult } from "./googlecloudretailv2betapredictresponsepredictionresult";
/**
 * Response message for predict method.
**/
export declare class GoogleCloudRetailV2betaPredictResponse extends SpeakeasyBase {
    attributionToken?: string;
    missingIds?: string[];
    results?: GoogleCloudRetailV2betaPredictResponsePredictionResult[];
    validateOnly?: boolean;
}
