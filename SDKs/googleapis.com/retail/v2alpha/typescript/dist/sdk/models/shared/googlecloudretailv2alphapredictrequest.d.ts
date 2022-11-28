import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2alphaUserEventInput } from "./googlecloudretailv2alphauserevent";
/**
 * Request message for Predict method.
**/
export declare class GoogleCloudRetailV2alphaPredictRequestInput extends SpeakeasyBase {
    filter?: string;
    labels?: Map<string, string>;
    pageSize?: number;
    pageToken?: string;
    params?: Map<string, any>;
    userEvent?: GoogleCloudRetailV2alphaUserEventInput;
    validateOnly?: boolean;
}
