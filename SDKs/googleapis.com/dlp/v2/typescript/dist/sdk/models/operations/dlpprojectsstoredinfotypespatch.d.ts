import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DlpProjectsStoredInfoTypesPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DlpProjectsStoredInfoTypesPatchQueryParams extends SpeakeasyBase {
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
export declare class DlpProjectsStoredInfoTypesPatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DlpProjectsStoredInfoTypesPatchRequest extends SpeakeasyBase {
    pathParams: DlpProjectsStoredInfoTypesPatchPathParams;
    queryParams: DlpProjectsStoredInfoTypesPatchQueryParams;
    request?: shared.GooglePrivacyDlpV2UpdateStoredInfoTypeRequest;
    security: DlpProjectsStoredInfoTypesPatchSecurity;
}
export declare class DlpProjectsStoredInfoTypesPatchResponse extends SpeakeasyBase {
    contentType: string;
    googlePrivacyDlpV2StoredInfoType?: shared.GooglePrivacyDlpV2StoredInfoType;
    statusCode: number;
}
