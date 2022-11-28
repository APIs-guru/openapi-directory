import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoInventorySourcesCreateQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoInventorySourcesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoInventorySourcesCreateRequest extends SpeakeasyBase {
    queryParams: DisplayvideoInventorySourcesCreateQueryParams;
    request?: shared.InventorySourceInput;
    security: DisplayvideoInventorySourcesCreateSecurity;
}
export declare class DisplayvideoInventorySourcesCreateResponse extends SpeakeasyBase {
    contentType: string;
    inventorySource?: shared.InventorySource;
    statusCode: number;
}
