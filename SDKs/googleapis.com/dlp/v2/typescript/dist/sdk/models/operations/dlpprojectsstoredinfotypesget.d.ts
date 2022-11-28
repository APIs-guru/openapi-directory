import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DlpProjectsStoredInfoTypesGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DlpProjectsStoredInfoTypesGetQueryParams extends SpeakeasyBase {
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
export declare class DlpProjectsStoredInfoTypesGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DlpProjectsStoredInfoTypesGetRequest extends SpeakeasyBase {
    pathParams: DlpProjectsStoredInfoTypesGetPathParams;
    queryParams: DlpProjectsStoredInfoTypesGetQueryParams;
    security: DlpProjectsStoredInfoTypesGetSecurity;
}
export declare class DlpProjectsStoredInfoTypesGetResponse extends SpeakeasyBase {
    contentType: string;
    googlePrivacyDlpV2StoredInfoType?: shared.GooglePrivacyDlpV2StoredInfoType;
    statusCode: number;
}
