import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { MessageCode404SbsEnum } from "./messagecode404sbsenum";
/**
 * This is a data element to support the declaration of additional errors in the context of [RFC7807].
**/
export declare class Error404SbsAdditionalErrors extends SpeakeasyBase {
    code: MessageCode404SbsEnum;
    detail?: string;
    title?: string;
}
/**
 * Standardised definition of reporting error information according to [RFC7807]
 * in case of a HTTP error code 404 for signing baskets.
 *
**/
export declare class Error404Sbs extends SpeakeasyBase {
    links?: Map<string, HrefType>;
    additionalErrors?: Error404SbsAdditionalErrors[];
    code: MessageCode404SbsEnum;
    detail?: string;
    title?: string;
    type: string;
}
