import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DlpProjectsLocationsContentInspectPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DlpProjectsLocationsContentInspectQueryParams extends SpeakeasyBase {
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
export declare class DlpProjectsLocationsContentInspectSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DlpProjectsLocationsContentInspectRequest extends SpeakeasyBase {
    pathParams: DlpProjectsLocationsContentInspectPathParams;
    queryParams: DlpProjectsLocationsContentInspectQueryParams;
    request?: shared.GooglePrivacyDlpV2InspectContentRequest;
    security: DlpProjectsLocationsContentInspectSecurity;
}
export declare class DlpProjectsLocationsContentInspectResponse extends SpeakeasyBase {
    contentType: string;
    googlePrivacyDlpV2InspectContentResponse?: shared.GooglePrivacyDlpV2InspectContentResponse;
    statusCode: number;
}
