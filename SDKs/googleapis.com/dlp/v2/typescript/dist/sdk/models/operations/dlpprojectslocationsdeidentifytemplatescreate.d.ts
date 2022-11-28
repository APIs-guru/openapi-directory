import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DlpProjectsLocationsDeidentifyTemplatesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DlpProjectsLocationsDeidentifyTemplatesCreateQueryParams extends SpeakeasyBase {
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
export declare class DlpProjectsLocationsDeidentifyTemplatesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DlpProjectsLocationsDeidentifyTemplatesCreateRequest extends SpeakeasyBase {
    pathParams: DlpProjectsLocationsDeidentifyTemplatesCreatePathParams;
    queryParams: DlpProjectsLocationsDeidentifyTemplatesCreateQueryParams;
    request?: shared.GooglePrivacyDlpV2CreateDeidentifyTemplateRequestInput;
    security: DlpProjectsLocationsDeidentifyTemplatesCreateSecurity;
}
export declare class DlpProjectsLocationsDeidentifyTemplatesCreateResponse extends SpeakeasyBase {
    contentType: string;
    googlePrivacyDlpV2DeidentifyTemplate?: shared.GooglePrivacyDlpV2DeidentifyTemplate;
    statusCode: number;
}
