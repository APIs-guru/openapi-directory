import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { MessageCode400PisEnum } from "./messagecode400pisenum";
/**
 * This is a data element to support the declaration of additional errors in the context of [RFC7807].
**/
export declare class Error400PisAdditionalErrors extends SpeakeasyBase {
    code: MessageCode400PisEnum;
    detail?: string;
    title?: string;
}
/**
 * Standardised definition of reporting error information according to [RFC7807]
 * in case of a HTTP error code 400 for PIS.
 *
**/
export declare class Error400Pis extends SpeakeasyBase {
    links?: Map<string, HrefType>;
    additionalErrors?: Error400PisAdditionalErrors[];
    code: MessageCode400PisEnum;
    detail?: string;
    title?: string;
    type: string;
}
