import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudsearchSettingsSearchapplicationsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    debugOptionsEnableDebugging?: boolean;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudsearchSettingsSearchapplicationsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchSettingsSearchapplicationsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchSettingsSearchapplicationsListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudsearchSettingsSearchapplicationsListSecurity extends SpeakeasyBase {
    option1?: CloudsearchSettingsSearchapplicationsListSecurityOption1;
    option2?: CloudsearchSettingsSearchapplicationsListSecurityOption2;
    option3?: CloudsearchSettingsSearchapplicationsListSecurityOption3;
}
export declare class CloudsearchSettingsSearchapplicationsListRequest extends SpeakeasyBase {
    queryParams: CloudsearchSettingsSearchapplicationsListQueryParams;
    security: CloudsearchSettingsSearchapplicationsListSecurity;
}
export declare class CloudsearchSettingsSearchapplicationsListResponse extends SpeakeasyBase {
    contentType: string;
    listSearchApplicationsResponse?: shared.ListSearchApplicationsResponse;
    statusCode: number;
}
