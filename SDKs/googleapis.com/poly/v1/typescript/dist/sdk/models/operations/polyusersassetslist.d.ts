import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PolyUsersAssetsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare enum PolyUsersAssetsListVisibilityEnum {
    VisibilityUnspecified = "VISIBILITY_UNSPECIFIED",
    Published = "PUBLISHED",
    Private = "PRIVATE"
}
export declare class PolyUsersAssetsListQueryParams extends SpeakeasyBase {
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
    visibility?: PolyUsersAssetsListVisibilityEnum;
}
export declare class PolyUsersAssetsListRequest extends SpeakeasyBase {
    pathParams: PolyUsersAssetsListPathParams;
    queryParams: PolyUsersAssetsListQueryParams;
}
export declare class PolyUsersAssetsListResponse extends SpeakeasyBase {
    contentType: string;
    listUserAssetsResponse?: shared.ListUserAssetsResponse;
    statusCode: number;
}
