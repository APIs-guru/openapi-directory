import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { MessageCode404AisEnum } from "./messagecode404aisenum";
/**
 * This is a data element to support the declaration of additional errors in the context of [RFC7807].
**/
export declare class Error404AisAdditionalErrors extends SpeakeasyBase {
    code: MessageCode404AisEnum;
    detail?: string;
    title?: string;
}
/**
 * Standardised definition of reporting error information according to [RFC7807]
 * in case of a HTTP error code 404 for AIS.
 *
**/
export declare class Error404Ais extends SpeakeasyBase {
    links?: Map<string, HrefType>;
    additionalErrors?: Error404AisAdditionalErrors[];
    code: MessageCode404AisEnum;
    detail?: string;
    title?: string;
    type: string;
}
