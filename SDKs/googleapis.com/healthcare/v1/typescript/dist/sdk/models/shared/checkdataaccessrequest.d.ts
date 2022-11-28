import { SpeakeasyBase } from "../../../internal/utils";
import { ConsentList } from "./consentlist";
export declare enum CheckDataAccessRequestResponseViewEnum {
    ResponseViewUnspecified = "RESPONSE_VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
/**
 * Checks if a particular data_id of a User data mapping in the given consent store is consented for a given use.
**/
export declare class CheckDataAccessRequest extends SpeakeasyBase {
    consentList?: ConsentList;
    dataId?: string;
    requestAttributes?: Map<string, string>;
    responseView?: CheckDataAccessRequestResponseViewEnum;
}
