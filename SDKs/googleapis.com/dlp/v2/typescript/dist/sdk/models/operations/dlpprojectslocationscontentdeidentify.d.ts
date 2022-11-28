import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DlpProjectsLocationsContentDeidentifyPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DlpProjectsLocationsContentDeidentifyQueryParams extends SpeakeasyBase {
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
export declare class DlpProjectsLocationsContentDeidentifySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DlpProjectsLocationsContentDeidentifyRequest extends SpeakeasyBase {
    pathParams: DlpProjectsLocationsContentDeidentifyPathParams;
    queryParams: DlpProjectsLocationsContentDeidentifyQueryParams;
    request?: shared.GooglePrivacyDlpV2DeidentifyContentRequest;
    security: DlpProjectsLocationsContentDeidentifySecurity;
}
export declare class DlpProjectsLocationsContentDeidentifyResponse extends SpeakeasyBase {
    contentType: string;
    googlePrivacyDlpV2DeidentifyContentResponse?: shared.GooglePrivacyDlpV2DeidentifyContentResponse;
    statusCode: number;
}
