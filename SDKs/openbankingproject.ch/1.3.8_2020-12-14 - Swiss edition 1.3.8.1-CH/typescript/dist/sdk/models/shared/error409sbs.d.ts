import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { MessageCode409SbsEnum } from "./messagecode409sbsenum";
/**
 * This is a data element to support the declaration of additional errors in the context of [RFC7807].
**/
export declare class Error409SbsAdditionalErrors extends SpeakeasyBase {
    code: MessageCode409SbsEnum;
    detail?: string;
    title?: string;
}
/**
 * Standardised definition of reporting error information according to [RFC7807]
 * in case of a HTTP error code 409 for signing baskets.
 *
**/
export declare class Error409Sbs extends SpeakeasyBase {
    links?: Map<string, HrefType>;
    additionalErrors?: Error409SbsAdditionalErrors[];
    code: MessageCode409SbsEnum;
    detail?: string;
    title?: string;
    type: string;
}
