import { SpeakeasyBase } from "../../../internal/utils";
export declare enum XxePayloadLocationEnum {
    LocationUnspecified = "LOCATION_UNSPECIFIED",
    CompleteRequestBody = "COMPLETE_REQUEST_BODY"
}
/**
 * Information reported for an XXE.
**/
export declare class Xxe extends SpeakeasyBase {
    payloadLocation?: XxePayloadLocationEnum;
    payloadValue?: string;
}
