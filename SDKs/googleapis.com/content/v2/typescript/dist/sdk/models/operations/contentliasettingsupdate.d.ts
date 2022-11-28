import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentLiasettingsUpdatePathParams extends SpeakeasyBase {
    accountId: string;
    merchantId: string;
}
export declare class ContentLiasettingsUpdateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    dryRun?: boolean;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContentLiasettingsUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentLiasettingsUpdateRequest extends SpeakeasyBase {
    pathParams: ContentLiasettingsUpdatePathParams;
    queryParams: ContentLiasettingsUpdateQueryParams;
    request?: shared.LiaSettings;
    security: ContentLiasettingsUpdateSecurity;
}
export declare class ContentLiasettingsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    liaSettings?: shared.LiaSettings;
    statusCode: number;
}
