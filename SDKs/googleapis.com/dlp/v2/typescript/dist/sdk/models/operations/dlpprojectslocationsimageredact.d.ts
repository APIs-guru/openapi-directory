import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DlpProjectsLocationsImageRedactPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DlpProjectsLocationsImageRedactQueryParams extends SpeakeasyBase {
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
export declare class DlpProjectsLocationsImageRedactSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DlpProjectsLocationsImageRedactRequest extends SpeakeasyBase {
    pathParams: DlpProjectsLocationsImageRedactPathParams;
    queryParams: DlpProjectsLocationsImageRedactQueryParams;
    request?: shared.GooglePrivacyDlpV2RedactImageRequest;
    security: DlpProjectsLocationsImageRedactSecurity;
}
export declare class DlpProjectsLocationsImageRedactResponse extends SpeakeasyBase {
    contentType: string;
    googlePrivacyDlpV2RedactImageResponse?: shared.GooglePrivacyDlpV2RedactImageResponse;
    statusCode: number;
}
