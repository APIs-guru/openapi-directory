import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Request for iSDK to get reopen attribution for app universal link open deeplinking. This endpoint is meant for only iOS requests.
**/
export declare class GetIosReopenAttributionRequest extends SpeakeasyBase {
    bundleId?: string;
    requestedLink?: string;
    sdkVersion?: string;
}
