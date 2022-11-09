import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class OffersLoungesByLocationGetPathParams extends SpeakeasyBase {
    location: string;
}
export declare class OffersLoungesByLocationGetQueryParams extends SpeakeasyBase {
    cabinClass?: string;
    lang?: string;
    tierCode?: string;
}
export declare class OffersLoungesByLocationGetHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class OffersLoungesByLocationGetSecurity extends SpeakeasyBase {
    auth: shared.SchemeAuth;
}
export declare class OffersLoungesByLocationGetRequest extends SpeakeasyBase {
    pathParams: OffersLoungesByLocationGetPathParams;
    queryParams: OffersLoungesByLocationGetQueryParams;
    headers: OffersLoungesByLocationGetHeaders;
    security: OffersLoungesByLocationGetSecurity;
}
export declare class OffersLoungesByLocationGetResponse extends SpeakeasyBase {
    contentType: string;
    offersLoungesByLocationGet200ApplicationJsonObject?: Map<string, any>;
    statusCode: number;
}
