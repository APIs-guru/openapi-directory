import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeepLinksQueryParams extends SpeakeasyBase {
    cabinClass?: string;
    catalogues: string;
    country: string;
    destination?: string;
    destinationName?: string;
    encryptionKey?: string;
    fare?: string;
    fareCurrency?: string;
    lang: string;
    netFare?: string;
    origin?: string;
    originName?: string;
    outboundSegments?: string;
    partnerid?: string;
    returnDate?: string;
    returnSegments?: string;
    trackingid: string;
    travelDate?: string;
    travelers?: string;
}
export declare class DeepLinksHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class DeepLinksSecurity extends SpeakeasyBase {
    auth: shared.SchemeAuth;
}
export declare class DeepLinksRequest extends SpeakeasyBase {
    queryParams: DeepLinksQueryParams;
    headers: DeepLinksHeaders;
    security: DeepLinksSecurity;
}
export declare class DeepLinksResponse extends SpeakeasyBase {
    contentType: string;
    deepLinks200ApplicationJsonString?: string;
    statusCode: number;
}
