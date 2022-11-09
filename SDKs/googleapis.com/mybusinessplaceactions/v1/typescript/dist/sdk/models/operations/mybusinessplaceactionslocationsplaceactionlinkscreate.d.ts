import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class MybusinessplaceactionsLocationsPlaceActionLinksCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MybusinessplaceactionsLocationsPlaceActionLinksCreateQueryParams extends SpeakeasyBase {
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
export declare class MybusinessplaceactionsLocationsPlaceActionLinksCreateRequest extends SpeakeasyBase {
    pathParams: MybusinessplaceactionsLocationsPlaceActionLinksCreatePathParams;
    queryParams: MybusinessplaceactionsLocationsPlaceActionLinksCreateQueryParams;
    request?: shared.PlaceActionLink;
}
export declare class MybusinessplaceactionsLocationsPlaceActionLinksCreateResponse extends SpeakeasyBase {
    contentType: string;
    placeActionLink?: shared.PlaceActionLink;
    statusCode: number;
}
