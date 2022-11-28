import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { MessageCode405PisCancEnum } from "./messagecode405piscancenum";
/**
 * This is a data element to support the declaration of additional errors in the context of [RFC7807].
**/
export declare class Error405PisCancAdditionalErrors extends SpeakeasyBase {
    code: MessageCode405PisCancEnum;
    detail?: string;
    title?: string;
}
/**
 * Standardised definition of reporting error information according to [RFC7807]
 * in case of a HTTP error code 405 for a pament cancelation (PIS).
 *
**/
export declare class Error405PisCanc extends SpeakeasyBase {
    links?: Map<string, HrefType>;
    additionalErrors?: Error405PisCancAdditionalErrors[];
    code: MessageCode405PisCancEnum;
    detail?: string;
    title?: string;
    type: string;
}
