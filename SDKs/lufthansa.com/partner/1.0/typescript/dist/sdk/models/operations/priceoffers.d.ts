import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PriceOffersPathParams extends SpeakeasyBase {
    destination: string;
    origin: string;
}
export declare class PriceOffersQueryParams extends SpeakeasyBase {
    departureDate: string;
    returnDate: string;
    service?: string;
}
export declare class PriceOffersSecurity extends SpeakeasyBase {
    auth: shared.SchemeAuth;
}
export declare class PriceOffersRequest extends SpeakeasyBase {
    pathParams: PriceOffersPathParams;
    queryParams: PriceOffersQueryParams;
    security: PriceOffersSecurity;
}
export declare class PriceOffersResponse extends SpeakeasyBase {
    contentType: string;
    priceOffers200ApplicationJsonString?: string;
    statusCode: number;
}
