import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PolyUsersLikedassetsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class PolyUsersLikedassetsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    format?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class PolyUsersLikedassetsListRequest extends SpeakeasyBase {
    pathParams: PolyUsersLikedassetsListPathParams;
    queryParams: PolyUsersLikedassetsListQueryParams;
}
export declare class PolyUsersLikedassetsListResponse extends SpeakeasyBase {
    contentType: string;
    listLikedAssetsResponse?: shared.ListLikedAssetsResponse;
    statusCode: number;
}
