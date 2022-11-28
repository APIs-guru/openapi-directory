import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentLiasettingsSetposdataproviderPathParams extends SpeakeasyBase {
    accountId: string;
    merchantId: string;
}
export declare class ContentLiasettingsSetposdataproviderQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    country: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    posDataProviderId?: string;
    posExternalAccountId?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContentLiasettingsSetposdataproviderSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentLiasettingsSetposdataproviderRequest extends SpeakeasyBase {
    pathParams: ContentLiasettingsSetposdataproviderPathParams;
    queryParams: ContentLiasettingsSetposdataproviderQueryParams;
    security: ContentLiasettingsSetposdataproviderSecurity;
}
export declare class ContentLiasettingsSetposdataproviderResponse extends SpeakeasyBase {
    contentType: string;
    liasettingsSetPosDataProviderResponse?: shared.LiasettingsSetPosDataProviderResponse;
    statusCode: number;
}
