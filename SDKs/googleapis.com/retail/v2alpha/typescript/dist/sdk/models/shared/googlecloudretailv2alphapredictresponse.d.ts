import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaPredictResponsePredictionResult } from "./googlecloudretailv2alphapredictresponsepredictionresult";
/**
 * Response message for predict method.
**/
export declare class GoogleCloudRetailV2alphaPredictResponse extends SpeakeasyBase {
    attributionToken?: string;
    missingIds?: string[];
    results?: GoogleCloudRetailV2alphaPredictResponsePredictionResult[];
    validateOnly?: boolean;
}
