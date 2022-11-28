import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response for iSDK to get reopen attribution for app universal link open deeplinking. This endpoint is meant for only iOS requests.
**/
export declare class GetIosReopenAttributionResponse extends SpeakeasyBase {
    deepLink?: string;
    invitationId?: string;
    iosMinAppVersion?: string;
    resolvedLink?: string;
    utmCampaign?: string;
    utmContent?: string;
    utmMedium?: string;
    utmSource?: string;
    utmTerm?: string;
}
