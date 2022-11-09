import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetPathParams extends SpeakeasyBase {
    cabinClass: string;
    date: string;
    destination: string;
    flightNumber: string;
    origin: string;
}
export declare class OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetSecurity extends SpeakeasyBase {
    auth: shared.SchemeAuth;
}
export declare class OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetRequest extends SpeakeasyBase {
    pathParams: OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetPathParams;
    headers: OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetHeaders;
    security: OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetSecurity;
}
export declare class OffersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGetResponse extends SpeakeasyBase {
    contentType: string;
    offersSeatmapsDestinationDateCabinClassByFlightNumberAndOriginGet200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
