import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoInventorySourceGroupsCreateQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoInventorySourceGroupsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoInventorySourceGroupsCreateRequest extends SpeakeasyBase {
    queryParams: DisplayvideoInventorySourceGroupsCreateQueryParams;
    request?: shared.InventorySourceGroupInput;
    security: DisplayvideoInventorySourceGroupsCreateSecurity;
}
export declare class DisplayvideoInventorySourceGroupsCreateResponse extends SpeakeasyBase {
    contentType: string;
    inventorySourceGroup?: shared.InventorySourceGroup;
    statusCode: number;
}
