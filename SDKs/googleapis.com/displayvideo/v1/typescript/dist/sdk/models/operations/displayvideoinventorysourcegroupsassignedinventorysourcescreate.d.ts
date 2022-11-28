import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreatePathParams extends SpeakeasyBase {
    inventorySourceGroupId: string;
}
export declare class DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateRequest extends SpeakeasyBase {
    pathParams: DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreatePathParams;
    queryParams: DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateQueryParams;
    request?: shared.AssignedInventorySourceInput;
    security: DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateSecurity;
}
export declare class DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateResponse extends SpeakeasyBase {
    assignedInventorySource?: shared.AssignedInventorySource;
    contentType: string;
    statusCode: number;
}
