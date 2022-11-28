import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentShippingsettingsUpdatePathParams extends SpeakeasyBase {
    accountId: string;
    merchantId: string;
}
export declare class ContentShippingsettingsUpdateQueryParams extends SpeakeasyBase {
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
export declare class ContentShippingsettingsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentShippingsettingsUpdateRequest extends SpeakeasyBase {
    pathParams: ContentShippingsettingsUpdatePathParams;
    queryParams: ContentShippingsettingsUpdateQueryParams;
    request?: shared.ShippingSettings;
    security: ContentShippingsettingsUpdateSecurity;
}
export declare class ContentShippingsettingsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    shippingSettings?: shared.ShippingSettings;
    statusCode: number;
}
