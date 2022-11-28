import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { MessageCode401PiisEnum } from "./messagecode401piisenum";
import { MessageCode401PisEnum } from "./messagecode401pisenum";
/**
 * This is a data element to support the declaration of additional errors in the context of [RFC7807].
**/
export declare class Error401PiisAdditionalErrors extends SpeakeasyBase {
    code: MessageCode401PiisEnum;
    detail?: string;
    title?: string;
}
/**
 * Standardised definition of reporting error information according to [RFC7807]
 * in case of a HTTP error code 401 for PIIS.
 *
**/
export declare class Error401Piis extends SpeakeasyBase {
    links?: Map<string, HrefType>;
    additionalErrors?: Error401PiisAdditionalErrors[];
    code: MessageCode401PisEnum;
    detail?: string;
    title?: string;
    type: string;
}
