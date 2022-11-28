import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { MessageCode403AisEnum } from "./messagecode403aisenum";
/**
 * This is a data element to support the declaration of additional errors in the context of [RFC7807].
**/
export declare class Error403AisAdditionalErrors extends SpeakeasyBase {
    code: MessageCode403AisEnum;
    detail?: string;
    title?: string;
}
/**
 * Standardised definition of reporting error information according to [RFC7807]
 * in case of a HTTP error code 403 for AIS.
 *
**/
export declare class Error403Ais extends SpeakeasyBase {
    links?: Map<string, HrefType>;
    additionalErrors?: Error403AisAdditionalErrors[];
    code: MessageCode403AisEnum;
    detail?: string;
    title?: string;
    type: string;
}
