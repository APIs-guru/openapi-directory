import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { MessageCode403PisEnum } from "./messagecode403pisenum";
/**
 * This is a data element to support the declaration of additional errors in the context of [RFC7807].
**/
export declare class Error403PisAdditionalErrors extends SpeakeasyBase {
    code: MessageCode403PisEnum;
    detail?: string;
    title?: string;
}
/**
 * Standardised definition of reporting error information according to [RFC7807]
 * in case of a HTTP error code 403 for PIS.
 *
**/
export declare class Error403Pis extends SpeakeasyBase {
    links?: Map<string, HrefType>;
    additionalErrors?: Error403PisAdditionalErrors[];
    code: MessageCode403PisEnum;
    detail?: string;
    title?: string;
    type: string;
}
