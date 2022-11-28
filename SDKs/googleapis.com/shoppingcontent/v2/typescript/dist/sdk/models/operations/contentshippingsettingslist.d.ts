import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentShippingsettingsListPathParams extends SpeakeasyBase {
    merchantId: string;
}
export declare class ContentShippingsettingsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContentShippingsettingsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentShippingsettingsListRequest extends SpeakeasyBase {
    pathParams: ContentShippingsettingsListPathParams;
    queryParams: ContentShippingsettingsListQueryParams;
    security: ContentShippingsettingsListSecurity;
}
export declare class ContentShippingsettingsListResponse extends SpeakeasyBase {
    contentType: string;
    shippingsettingsListResponse?: shared.ShippingsettingsListResponse;
    statusCode: number;
}
