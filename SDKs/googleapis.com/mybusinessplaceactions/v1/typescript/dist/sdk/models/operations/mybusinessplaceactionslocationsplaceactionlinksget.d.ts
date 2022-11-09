import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class MybusinessplaceactionsLocationsPlaceActionLinksGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MybusinessplaceactionsLocationsPlaceActionLinksGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MybusinessplaceactionsLocationsPlaceActionLinksGetRequest extends SpeakeasyBase {
    pathParams: MybusinessplaceactionsLocationsPlaceActionLinksGetPathParams;
    queryParams: MybusinessplaceactionsLocationsPlaceActionLinksGetQueryParams;
}
export declare class MybusinessplaceactionsLocationsPlaceActionLinksGetResponse extends SpeakeasyBase {
    contentType: string;
    placeActionLink?: shared.PlaceActionLink;
    statusCode: number;
}
