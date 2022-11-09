import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class MybusinessplaceactionsLocationsPlaceActionLinksListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MybusinessplaceactionsLocationsPlaceActionLinksListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MybusinessplaceactionsLocationsPlaceActionLinksListRequest extends SpeakeasyBase {
    pathParams: MybusinessplaceactionsLocationsPlaceActionLinksListPathParams;
    queryParams: MybusinessplaceactionsLocationsPlaceActionLinksListQueryParams;
}
export declare class MybusinessplaceactionsLocationsPlaceActionLinksListResponse extends SpeakeasyBase {
    contentType: string;
    listPlaceActionLinksResponse?: shared.ListPlaceActionLinksResponse;
    statusCode: number;
}
