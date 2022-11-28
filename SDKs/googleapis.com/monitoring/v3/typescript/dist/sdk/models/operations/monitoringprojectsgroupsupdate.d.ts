import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MonitoringProjectsGroupsUpdatePathParams extends SpeakeasyBase {
    name: string;
}
export declare class MonitoringProjectsGroupsUpdateQueryParams extends SpeakeasyBase {
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
    validateOnly?: boolean;
}
export declare class MonitoringProjectsGroupsUpdateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsGroupsUpdateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsGroupsUpdateSecurity extends SpeakeasyBase {
    option1?: MonitoringProjectsGroupsUpdateSecurityOption1;
    option2?: MonitoringProjectsGroupsUpdateSecurityOption2;
}
export declare class MonitoringProjectsGroupsUpdateRequest extends SpeakeasyBase {
    pathParams: MonitoringProjectsGroupsUpdatePathParams;
    queryParams: MonitoringProjectsGroupsUpdateQueryParams;
    request?: shared.Group;
    security: MonitoringProjectsGroupsUpdateSecurity;
}
export declare class MonitoringProjectsGroupsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    group?: shared.Group;
    statusCode: number;
}
