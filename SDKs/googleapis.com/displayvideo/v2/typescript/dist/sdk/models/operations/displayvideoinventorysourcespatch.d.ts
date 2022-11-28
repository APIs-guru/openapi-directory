import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoInventorySourcesPatchPathParams extends SpeakeasyBase {
    inventorySourceId: string;
}
export declare class DisplayvideoInventorySourcesPatchQueryParams extends SpeakeasyBase {
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
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DisplayvideoInventorySourcesPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoInventorySourcesPatchRequest extends SpeakeasyBase {
    pathParams: DisplayvideoInventorySourcesPatchPathParams;
    queryParams: DisplayvideoInventorySourcesPatchQueryParams;
    request?: shared.InventorySourceInput;
    security: DisplayvideoInventorySourcesPatchSecurity;
}
export declare class DisplayvideoInventorySourcesPatchResponse extends SpeakeasyBase {
    contentType: string;
    inventorySource?: shared.InventorySource;
    statusCode: number;
}
