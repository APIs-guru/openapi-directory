import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DlpProjectsLocationsJobTriggersCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DlpProjectsLocationsJobTriggersCreateQueryParams extends SpeakeasyBase {
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
export declare class DlpProjectsLocationsJobTriggersCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DlpProjectsLocationsJobTriggersCreateRequest extends SpeakeasyBase {
    pathParams: DlpProjectsLocationsJobTriggersCreatePathParams;
    queryParams: DlpProjectsLocationsJobTriggersCreateQueryParams;
    request?: shared.GooglePrivacyDlpV2CreateJobTriggerRequestInput;
    security: DlpProjectsLocationsJobTriggersCreateSecurity;
}
export declare class DlpProjectsLocationsJobTriggersCreateResponse extends SpeakeasyBase {
    contentType: string;
    googlePrivacyDlpV2JobTrigger?: shared.GooglePrivacyDlpV2JobTrigger;
    statusCode: number;
}
