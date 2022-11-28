import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { MessageCode409PisEnum } from "./messagecode409pisenum";
/**
 * This is a data element to support the declaration of additional errors in the context of [RFC7807].
**/
export declare class Error409PisAdditionalErrors extends SpeakeasyBase {
    code: MessageCode409PisEnum;
    detail?: string;
    title?: string;
}
/**
 * Standardised definition of reporting error information according to [RFC7807]
 * in case of a HTTP error code 409 for PIS.
 *
**/
export declare class Error409Pis extends SpeakeasyBase {
    links?: Map<string, HrefType>;
    additionalErrors?: Error409PisAdditionalErrors[];
    code: MessageCode409PisEnum;
    detail?: string;
    title?: string;
    type: string;
}
