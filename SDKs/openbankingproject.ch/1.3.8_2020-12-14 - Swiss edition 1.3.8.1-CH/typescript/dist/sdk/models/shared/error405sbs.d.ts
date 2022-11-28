import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { MessageCode405SbsEnum } from "./messagecode405sbsenum";
/**
 * This is a data element to support the declaration of additional errors in the context of [RFC7807].
**/
export declare class Error405SbsAdditionalErrors extends SpeakeasyBase {
    code: MessageCode405SbsEnum;
    detail?: string;
    title?: string;
}
/**
 * Standardised definition of reporting error information according to [RFC7807]
 * in case of a HTTP error code 405 for signing baskets.
 *
**/
export declare class Error405Sbs extends SpeakeasyBase {
    links?: Map<string, HrefType>;
    additionalErrors?: Error405SbsAdditionalErrors[];
    code: MessageCode405SbsEnum;
    detail?: string;
    title?: string;
    type: string;
}
