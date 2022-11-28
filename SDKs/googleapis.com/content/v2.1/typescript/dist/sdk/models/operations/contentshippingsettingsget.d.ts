import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentShippingsettingsGetPathParams extends SpeakeasyBase {
    accountId: string;
    merchantId: string;
}
export declare class ContentShippingsettingsGetQueryParams extends SpeakeasyBase {
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
export declare class ContentShippingsettingsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentShippingsettingsGetRequest extends SpeakeasyBase {
    pathParams: ContentShippingsettingsGetPathParams;
    queryParams: ContentShippingsettingsGetQueryParams;
    security: ContentShippingsettingsGetSecurity;
}
export declare class ContentShippingsettingsGetResponse extends SpeakeasyBase {
    contentType: string;
    shippingSettings?: shared.ShippingSettings;
    statusCode: number;
}
