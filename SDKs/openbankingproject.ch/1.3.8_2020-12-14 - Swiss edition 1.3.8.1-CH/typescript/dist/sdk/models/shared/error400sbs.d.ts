import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { MessageCode400SbsEnum } from "./messagecode400sbsenum";
/**
 * This is a data element to support the declaration of additional errors in the context of [RFC7807].
**/
export declare class Error400SbsAdditionalErrors extends SpeakeasyBase {
    code: MessageCode400SbsEnum;
    detail?: string;
    title?: string;
}
/**
 * Standardised definition of reporting error information according to [RFC7807]
 * in case of a HTTP error code 400 for signing baskets.
 *
**/
export declare class Error400Sbs extends SpeakeasyBase {
    links?: Map<string, HrefType>;
    additionalErrors?: Error400SbsAdditionalErrors[];
    code: MessageCode400SbsEnum;
    detail?: string;
    title?: string;
    type: string;
}
