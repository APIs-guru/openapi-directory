import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoInventorySourceGroupsAssignedInventorySourcesListPathParams extends SpeakeasyBase {
    inventorySourceGroupId: string;
}
export declare class DisplayvideoInventorySourceGroupsAssignedInventorySourcesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    advertiserId?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    partnerId?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DisplayvideoInventorySourceGroupsAssignedInventorySourcesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoInventorySourceGroupsAssignedInventorySourcesListRequest extends SpeakeasyBase {
    pathParams: DisplayvideoInventorySourceGroupsAssignedInventorySourcesListPathParams;
    queryParams: DisplayvideoInventorySourceGroupsAssignedInventorySourcesListQueryParams;
    security: DisplayvideoInventorySourceGroupsAssignedInventorySourcesListSecurity;
}
export declare class DisplayvideoInventorySourceGroupsAssignedInventorySourcesListResponse extends SpeakeasyBase {
    contentType: string;
    listAssignedInventorySourcesResponse?: shared.ListAssignedInventorySourcesResponse;
    statusCode: number;
}
