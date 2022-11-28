import { SpeakeasyBase } from "../../../internal/utils";
import { ConsentList } from "./consentlist";
export declare enum EvaluateUserConsentsRequestResponseViewEnum {
    ResponseViewUnspecified = "RESPONSE_VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
/**
 * Evaluate a user's Consents for all matching User data mappings. Note: User data mappings are indexed asynchronously, causing slight delays between the time mappings are created or updated and when they are included in EvaluateUserConsents results.
**/
export declare class EvaluateUserConsentsRequest extends SpeakeasyBase {
    consentList?: ConsentList;
    pageSize?: number;
    pageToken?: string;
    requestAttributes?: Map<string, string>;
    resourceAttributes?: Map<string, string>;
    responseView?: EvaluateUserConsentsRequestResponseViewEnum;
    userId?: string;
}
