import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The error code and status of your request
**/
export declare class NiResponseXmlBasicError extends SpeakeasyBase {
    code?: string;
    statusText?: string;
}
/**
 * An object containing the `number` in your request in the format used by the country the number belongs to.
**/
export declare class NiResponseXmlBasicLocalNumber extends SpeakeasyBase {
    countryCode?: string;
    countryCodeIso3?: string;
    countryName?: string;
    countryPrefix?: string;
    number?: string;
}
/**
 * Basic
**/
export declare class NiResponseXmlBasic extends SpeakeasyBase {
    error?: NiResponseXmlBasicError;
    internationalFormatNumber?: string;
    localNumber?: NiResponseXmlBasicLocalNumber;
    requestId?: string;
}
