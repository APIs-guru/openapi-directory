import { SpeakeasyBase } from "../../../internal/utils";
import { HrefType } from "./hreftype";
import { MessageCode401SbsEnum } from "./messagecode401sbsenum";
/**
 * This is a data element to support the declaration of additional errors in the context of [RFC7807].
**/
export declare class Error401SbsAdditionalErrors extends SpeakeasyBase {
    code: MessageCode401SbsEnum;
    detail?: string;
    title?: string;
}
/**
 * Standardised definition of reporting error information according to [RFC7807]
 * in case of a HTTP error code 401 for signing baskets.
 *
**/
export declare class Error401Sbs extends SpeakeasyBase {
    links?: Map<string, HrefType>;
    additionalErrors?: Error401SbsAdditionalErrors[];
    code: MessageCode401SbsEnum;
    detail?: string;
    title?: string;
    type: string;
}
