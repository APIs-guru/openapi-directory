import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LhDeepLinksItcoQueryParams extends SpeakeasyBase {
    cabinClass?: string;
    catalogues: string;
    country: string;
    destination: string;
    encryptionKey?: string;
    fare: string;
    fareCurrency: string;
    lang: string;
    netFare?: string;
    origin: string;
    outboundSegments: string;
    partnerid?: string;
    returnDate?: string;
    returnSegments?: string;
    trackingid: string;
    travelDate: string;
    travelers?: string;
}
export declare class LhDeepLinksItcoHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class LhDeepLinksItcoSecurity extends SpeakeasyBase {
    auth: shared.SchemeAuth;
}
export declare class LhDeepLinksItcoRequest extends SpeakeasyBase {
    queryParams: LhDeepLinksItcoQueryParams;
    headers: LhDeepLinksItcoHeaders;
    security: LhDeepLinksItcoSecurity;
}
export declare class LhDeepLinksItcoResponse extends SpeakeasyBase {
    contentType: string;
    lhDeepLinksItco200ApplicationJsonString?: string;
    statusCode: number;
}
