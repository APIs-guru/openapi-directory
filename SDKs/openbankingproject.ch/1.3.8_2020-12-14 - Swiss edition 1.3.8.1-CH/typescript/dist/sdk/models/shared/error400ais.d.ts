import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { MessageCode400AisEnum } from "./messagecode400aisenum";
/**
 * This is a data element to support the declaration of additional errors in the context of [RFC7807].
**/
export declare class Error400AisAdditionalErrors extends SpeakeasyBase {
    code: MessageCode400AisEnum;
    detail?: string;
    title?: string;
}
/**
 * Standardised definition of reporting error information according to [RFC7807]
 * in case of a HTTP error code 400 for AIS.
 *
**/
export declare class Error400Ais extends SpeakeasyBase {
    links?: Map<string, HrefType>;
    additionalErrors?: Error400AisAdditionalErrors[];
    code: MessageCode400AisEnum;
    detail?: string;
    title?: string;
    type: string;
}
