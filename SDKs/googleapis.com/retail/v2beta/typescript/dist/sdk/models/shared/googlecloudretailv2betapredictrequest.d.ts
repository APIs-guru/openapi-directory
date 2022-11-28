import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2betaUserEventInput } from "./googlecloudretailv2betauserevent";
/**
 * Request message for Predict method.
**/
export declare class GoogleCloudRetailV2betaPredictRequestInput extends SpeakeasyBase {
    filter?: string;
    labels?: Map<string, string>;
    pageSize?: number;
    pageToken?: string;
    params?: Map<string, any>;
    userEvent?: GoogleCloudRetailV2betaUserEventInput;
    validateOnly?: boolean;
}
