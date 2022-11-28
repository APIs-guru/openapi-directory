import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoInventorySourceGroupsGetPathParams extends SpeakeasyBase {
    inventorySourceGroupId: string;
}
export declare class DisplayvideoInventorySourceGroupsGetQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoInventorySourceGroupsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoInventorySourceGroupsGetRequest extends SpeakeasyBase {
    pathParams: DisplayvideoInventorySourceGroupsGetPathParams;
    queryParams: DisplayvideoInventorySourceGroupsGetQueryParams;
    security: DisplayvideoInventorySourceGroupsGetSecurity;
}
export declare class DisplayvideoInventorySourceGroupsGetResponse extends SpeakeasyBase {
    contentType: string;
    inventorySourceGroup?: shared.InventorySourceGroup;
    statusCode: number;
}
