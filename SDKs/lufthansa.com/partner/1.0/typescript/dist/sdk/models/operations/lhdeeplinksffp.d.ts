import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LhDeepLinksFfpQueryParams extends SpeakeasyBase {
    cabinClass?: string;
    catalogues: string;
    country: string;
    destination: string;
    encryptionKey?: string;
    lang: string;
    origin: string;
    partnerid?: string;
    returnDate?: string;
    trackingid: string;
    travelDate: string;
    travelers?: string;
}
export declare class LhDeepLinksFfpHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class LhDeepLinksFfpSecurity extends SpeakeasyBase {
    auth: shared.SchemeAuth;
}
export declare class LhDeepLinksFfpRequest extends SpeakeasyBase {
    queryParams: LhDeepLinksFfpQueryParams;
    headers: LhDeepLinksFfpHeaders;
    security: LhDeepLinksFfpSecurity;
}
export declare class LhDeepLinksFfpResponse extends SpeakeasyBase {
    contentType: string;
    lhDeepLinksFfp200ApplicationJsonString?: string;
    statusCode: number;
}
