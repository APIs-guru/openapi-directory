import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { MessageCode406AisEnum } from "./messagecode406aisenum";
/**
 * This is a data element to support the declaration of additional errors in the context of [RFC7807].
**/
export declare class Error406AisAdditionalErrors extends SpeakeasyBase {
    code: MessageCode406AisEnum;
    detail?: string;
    title?: string;
}
/**
 * Standardised definition of reporting error information according to [RFC7807]
 * in case of a HTTP error code 406 for AIS.
 *
**/
export declare class Error406Ais extends SpeakeasyBase {
    links?: Map<string, HrefType>;
    additionalErrors?: Error406AisAdditionalErrors[];
    code: MessageCode406AisEnum;
    detail?: string;
    title?: string;
    type: string;
}
