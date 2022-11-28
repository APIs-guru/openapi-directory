import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { MessageCode405PisEnum } from "./messagecode405pisenum";
/**
 * This is a data element to support the declaration of additional errors in the context of [RFC7807].
**/
export declare class Error405PisAdditionalErrors extends SpeakeasyBase {
    code: MessageCode405PisEnum;
    detail?: string;
    title?: string;
}
/**
 * Standardised definition of reporting error information according to [RFC7807]
 * in case of a HTTP error code 405 for PIS.
 *
**/
export declare class Error405Pis extends SpeakeasyBase {
    links?: Map<string, HrefType>;
    additionalErrors?: Error405PisAdditionalErrors[];
    code: MessageCode405PisEnum;
    detail?: string;
    title?: string;
    type: string;
}
