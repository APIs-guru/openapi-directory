import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { MessageCode401AisEnum } from "./messagecode401aisenum";
/**
 * This is a data element to support the declaration of additional errors in the context of [RFC7807].
**/
export declare class Error401AisAdditionalErrors extends SpeakeasyBase {
    code: MessageCode401AisEnum;
    detail?: string;
    title?: string;
}
/**
 * Standardised definition of reporting error information according to [RFC7807]
 * in case of a HTTP error code 401 for AIS.
 *
**/
export declare class Error401Ais extends SpeakeasyBase {
    links?: Map<string, HrefType>;
    additionalErrors?: Error401AisAdditionalErrors[];
    code: MessageCode401AisEnum;
    detail?: string;
    title?: string;
    type: string;
}
