import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2UserEventInput } from "./googlecloudretailv2userevent";
/**
 * Request message for Predict method.
**/
export declare class GoogleCloudRetailV2PredictRequestInput extends SpeakeasyBase {
    filter?: string;
    labels?: Map<string, string>;
    pageSize?: number;
    pageToken?: string;
    params?: Map<string, any>;
    userEvent?: GoogleCloudRetailV2UserEventInput;
    validateOnly?: boolean;
}
