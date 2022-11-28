import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DlpProjectsLocationsJobTriggersHybridInspectPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DlpProjectsLocationsJobTriggersHybridInspectQueryParams extends SpeakeasyBase {
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
export declare class DlpProjectsLocationsJobTriggersHybridInspectSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DlpProjectsLocationsJobTriggersHybridInspectRequest extends SpeakeasyBase {
    pathParams: DlpProjectsLocationsJobTriggersHybridInspectPathParams;
    queryParams: DlpProjectsLocationsJobTriggersHybridInspectQueryParams;
    request?: shared.GooglePrivacyDlpV2HybridInspectJobTriggerRequest;
    security: DlpProjectsLocationsJobTriggersHybridInspectSecurity;
}
export declare class DlpProjectsLocationsJobTriggersHybridInspectResponse extends SpeakeasyBase {
    contentType: string;
    googlePrivacyDlpV2HybridInspectResponse?: Map<string, any>;
    statusCode: number;
}
