import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DlpProjectsLocationsJobTriggersActivatePathParams extends SpeakeasyBase {
    name: string;
}
export declare class DlpProjectsLocationsJobTriggersActivateQueryParams extends SpeakeasyBase {
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
export declare class DlpProjectsLocationsJobTriggersActivateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DlpProjectsLocationsJobTriggersActivateRequest extends SpeakeasyBase {
    pathParams: DlpProjectsLocationsJobTriggersActivatePathParams;
    queryParams: DlpProjectsLocationsJobTriggersActivateQueryParams;
    request?: Map<string, any>;
    security: DlpProjectsLocationsJobTriggersActivateSecurity;
}
export declare class DlpProjectsLocationsJobTriggersActivateResponse extends SpeakeasyBase {
    contentType: string;
    googlePrivacyDlpV2DlpJob?: shared.GooglePrivacyDlpV2DlpJob;
    statusCode: number;
}
