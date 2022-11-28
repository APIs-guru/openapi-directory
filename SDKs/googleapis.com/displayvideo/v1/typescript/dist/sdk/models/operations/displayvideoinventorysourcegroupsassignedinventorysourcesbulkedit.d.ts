import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditPathParams extends SpeakeasyBase {
    inventorySourceGroupId: string;
}
export declare class DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditRequest extends SpeakeasyBase {
    pathParams: DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditPathParams;
    queryParams: DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditQueryParams;
    request?: shared.BulkEditAssignedInventorySourcesRequestInput;
    security: DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditSecurity;
}
export declare class DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditResponse extends SpeakeasyBase {
    bulkEditAssignedInventorySourcesResponse?: shared.BulkEditAssignedInventorySourcesResponse;
    contentType: string;
    statusCode: number;
}
