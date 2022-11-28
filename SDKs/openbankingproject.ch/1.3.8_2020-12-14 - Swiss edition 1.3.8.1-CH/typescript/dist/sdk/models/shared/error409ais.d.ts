import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { MessageCode409AisEnum } from "./messagecode409aisenum";
/**
 * This is a data element to support the declaration of additional errors in the context of [RFC7807].
**/
export declare class Error409AisAdditionalErrors extends SpeakeasyBase {
    code: MessageCode409AisEnum;
    detail?: string;
    title?: string;
}
/**
 * Standardised definition of reporting error information according to [RFC7807]
 * in case of a HTTP error code 409 for AIS.
 *
**/
export declare class Error409Ais extends SpeakeasyBase {
    links?: Map<string, HrefType>;
    additionalErrors?: Error409AisAdditionalErrors[];
    code: MessageCode409AisEnum;
    detail?: string;
    title?: string;
    type: string;
}
