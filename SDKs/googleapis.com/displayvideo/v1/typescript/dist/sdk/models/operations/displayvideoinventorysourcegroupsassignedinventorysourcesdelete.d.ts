import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeletePathParams extends SpeakeasyBase {
    assignedInventorySourceId: string;
    inventorySourceGroupId: string;
}
export declare class DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    advertiserId?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    partnerId?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteRequest extends SpeakeasyBase {
    pathParams: DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeletePathParams;
    queryParams: DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteQueryParams;
    security: DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteSecurity;
}
export declare class DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
