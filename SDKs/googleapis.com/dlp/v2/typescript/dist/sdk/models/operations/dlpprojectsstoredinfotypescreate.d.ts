import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DlpProjectsStoredInfoTypesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DlpProjectsStoredInfoTypesCreateQueryParams extends SpeakeasyBase {
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
export declare class DlpProjectsStoredInfoTypesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DlpProjectsStoredInfoTypesCreateRequest extends SpeakeasyBase {
    pathParams: DlpProjectsStoredInfoTypesCreatePathParams;
    queryParams: DlpProjectsStoredInfoTypesCreateQueryParams;
    request?: shared.GooglePrivacyDlpV2CreateStoredInfoTypeRequest;
    security: DlpProjectsStoredInfoTypesCreateSecurity;
}
export declare class DlpProjectsStoredInfoTypesCreateResponse extends SpeakeasyBase {
    contentType: string;
    googlePrivacyDlpV2StoredInfoType?: shared.GooglePrivacyDlpV2StoredInfoType;
    statusCode: number;
}
