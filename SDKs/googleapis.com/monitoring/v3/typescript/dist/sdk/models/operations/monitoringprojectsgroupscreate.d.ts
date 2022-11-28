import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MonitoringProjectsGroupsCreatePathParams extends SpeakeasyBase {
    name: string;
}
export declare class MonitoringProjectsGroupsCreateQueryParams extends SpeakeasyBase {
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
export declare class MonitoringProjectsGroupsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsGroupsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringProjectsGroupsCreateSecurity extends SpeakeasyBase {
    option1?: MonitoringProjectsGroupsCreateSecurityOption1;
    option2?: MonitoringProjectsGroupsCreateSecurityOption2;
}
export declare class MonitoringProjectsGroupsCreateRequest extends SpeakeasyBase {
    pathParams: MonitoringProjectsGroupsCreatePathParams;
    queryParams: MonitoringProjectsGroupsCreateQueryParams;
    request?: shared.Group;
    security: MonitoringProjectsGroupsCreateSecurity;
}
export declare class MonitoringProjectsGroupsCreateResponse extends SpeakeasyBase {
    contentType: string;
    group?: shared.Group;
    statusCode: number;
}
