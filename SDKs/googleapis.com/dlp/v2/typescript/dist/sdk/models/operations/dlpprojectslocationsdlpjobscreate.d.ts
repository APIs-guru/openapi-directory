import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DlpProjectsLocationsDlpJobsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DlpProjectsLocationsDlpJobsCreateQueryParams extends SpeakeasyBase {
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
export declare class DlpProjectsLocationsDlpJobsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DlpProjectsLocationsDlpJobsCreateRequest extends SpeakeasyBase {
    pathParams: DlpProjectsLocationsDlpJobsCreatePathParams;
    queryParams: DlpProjectsLocationsDlpJobsCreateQueryParams;
    request?: shared.GooglePrivacyDlpV2CreateDlpJobRequest;
    security: DlpProjectsLocationsDlpJobsCreateSecurity;
}
export declare class DlpProjectsLocationsDlpJobsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googlePrivacyDlpV2DlpJob?: shared.GooglePrivacyDlpV2DlpJob;
    statusCode: number;
}
