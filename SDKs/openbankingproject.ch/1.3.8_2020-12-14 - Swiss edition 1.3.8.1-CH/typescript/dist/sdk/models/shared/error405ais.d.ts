import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { MessageCode405AisEnum } from "./messagecode405aisenum";
/**
 * This is a data element to support the declaration of additional errors in the context of [RFC7807].
**/
export declare class Error405AisAdditionalErrors extends SpeakeasyBase {
    code: MessageCode405AisEnum;
    detail?: string;
    title?: string;
}
/**
 * Standardised definition of reporting error information according to [RFC7807]
 * in case of a HTTP error code 405 for AIS.
 *
**/
export declare class Error405Ais extends SpeakeasyBase {
    links?: Map<string, HrefType>;
    additionalErrors?: Error405AisAdditionalErrors[];
    code: MessageCode405AisEnum;
    detail?: string;
    title?: string;
    type: string;
}
