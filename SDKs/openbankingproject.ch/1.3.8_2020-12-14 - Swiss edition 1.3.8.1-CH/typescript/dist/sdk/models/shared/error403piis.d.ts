import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { MessageCode403PiisEnum } from "./messagecode403piisenum";
/**
 * This is a data element to support the declaration of additional errors in the context of [RFC7807].
**/
export declare class Error403PiisAdditionalErrors extends SpeakeasyBase {
    code: MessageCode403PiisEnum;
    detail?: string;
    title?: string;
}
/**
 * Standardised definition of reporting error information according to [RFC7807]
 * in case of a HTTP error code 403 for PIIS.
 *
**/
export declare class Error403Piis extends SpeakeasyBase {
    links?: Map<string, HrefType>;
    additionalErrors?: Error403PiisAdditionalErrors[];
    code: MessageCode403PiisEnum;
    detail?: string;
    title?: string;
    type: string;
}
