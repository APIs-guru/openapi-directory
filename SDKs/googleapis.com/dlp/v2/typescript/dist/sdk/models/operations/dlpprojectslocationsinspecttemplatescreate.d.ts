import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DlpProjectsLocationsInspectTemplatesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DlpProjectsLocationsInspectTemplatesCreateQueryParams extends SpeakeasyBase {
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
export declare class DlpProjectsLocationsInspectTemplatesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DlpProjectsLocationsInspectTemplatesCreateRequest extends SpeakeasyBase {
    pathParams: DlpProjectsLocationsInspectTemplatesCreatePathParams;
    queryParams: DlpProjectsLocationsInspectTemplatesCreateQueryParams;
    request?: shared.GooglePrivacyDlpV2CreateInspectTemplateRequestInput;
    security: DlpProjectsLocationsInspectTemplatesCreateSecurity;
}
export declare class DlpProjectsLocationsInspectTemplatesCreateResponse extends SpeakeasyBase {
    contentType: string;
    googlePrivacyDlpV2InspectTemplate?: shared.GooglePrivacyDlpV2InspectTemplate;
    statusCode: number;
}
