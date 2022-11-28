import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoInventorySourcesGetPathParams extends SpeakeasyBase {
    inventorySourceId: string;
}
export declare class DisplayvideoInventorySourcesGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
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
export declare class DisplayvideoInventorySourcesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoInventorySourcesGetRequest extends SpeakeasyBase {
    pathParams: DisplayvideoInventorySourcesGetPathParams;
    queryParams: DisplayvideoInventorySourcesGetQueryParams;
    security: DisplayvideoInventorySourcesGetSecurity;
}
export declare class DisplayvideoInventorySourcesGetResponse extends SpeakeasyBase {
    contentType: string;
    inventorySource?: shared.InventorySource;
    statusCode: number;
}
