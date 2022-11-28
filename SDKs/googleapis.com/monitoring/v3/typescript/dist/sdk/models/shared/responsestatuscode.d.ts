import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ResponseStatusCodeStatusClassEnum {
    StatusClassUnspecified = "STATUS_CLASS_UNSPECIFIED",
    StatusClass1Xx = "STATUS_CLASS_1XX",
    StatusClass2Xx = "STATUS_CLASS_2XX",
    StatusClass3Xx = "STATUS_CLASS_3XX",
    StatusClass4Xx = "STATUS_CLASS_4XX",
    StatusClass5Xx = "STATUS_CLASS_5XX",
    StatusClassAny = "STATUS_CLASS_ANY"
}
/**
 * A status to accept. Either a status code class like "2xx", or an integer status code like "200".
**/
export declare class ResponseStatusCode extends SpeakeasyBase {
    statusClass?: ResponseStatusCodeStatusClassEnum;
    statusValue?: number;
}
