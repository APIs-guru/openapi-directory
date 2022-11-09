import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class MybusinessplaceactionsLocationsPlaceActionLinksPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MybusinessplaceactionsLocationsPlaceActionLinksPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MybusinessplaceactionsLocationsPlaceActionLinksPatchRequest extends SpeakeasyBase {
    pathParams: MybusinessplaceactionsLocationsPlaceActionLinksPatchPathParams;
    queryParams: MybusinessplaceactionsLocationsPlaceActionLinksPatchQueryParams;
    request?: shared.PlaceActionLink;
}
export declare class MybusinessplaceactionsLocationsPlaceActionLinksPatchResponse extends SpeakeasyBase {
    contentType: string;
    placeActionLink?: shared.PlaceActionLink;
    statusCode: number;
}
