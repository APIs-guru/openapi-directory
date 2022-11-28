import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DlpProjectsLocationsContentReidentifyPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DlpProjectsLocationsContentReidentifyQueryParams extends SpeakeasyBase {
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
export declare class DlpProjectsLocationsContentReidentifySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DlpProjectsLocationsContentReidentifyRequest extends SpeakeasyBase {
    pathParams: DlpProjectsLocationsContentReidentifyPathParams;
    queryParams: DlpProjectsLocationsContentReidentifyQueryParams;
    request?: shared.GooglePrivacyDlpV2ReidentifyContentRequest;
    security: DlpProjectsLocationsContentReidentifySecurity;
}
export declare class DlpProjectsLocationsContentReidentifyResponse extends SpeakeasyBase {
    contentType: string;
    googlePrivacyDlpV2ReidentifyContentResponse?: shared.GooglePrivacyDlpV2ReidentifyContentResponse;
    statusCode: number;
}
