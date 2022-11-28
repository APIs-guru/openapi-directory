import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoInventorySourceGroupsDeletePathParams extends SpeakeasyBase {
    inventorySourceGroupId: string;
}
export declare class DisplayvideoInventorySourceGroupsDeleteQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoInventorySourceGroupsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoInventorySourceGroupsDeleteRequest extends SpeakeasyBase {
    pathParams: DisplayvideoInventorySourceGroupsDeletePathParams;
    queryParams: DisplayvideoInventorySourceGroupsDeleteQueryParams;
    security: DisplayvideoInventorySourceGroupsDeleteSecurity;
}
export declare class DisplayvideoInventorySourceGroupsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
