import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MonitoringServicesServiceLevelObjectivesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class MonitoringServicesServiceLevelObjectivesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    serviceLevelObjectiveId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MonitoringServicesServiceLevelObjectivesCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringServicesServiceLevelObjectivesCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringServicesServiceLevelObjectivesCreateSecurity extends SpeakeasyBase {
    option1?: MonitoringServicesServiceLevelObjectivesCreateSecurityOption1;
    option2?: MonitoringServicesServiceLevelObjectivesCreateSecurityOption2;
}
export declare class MonitoringServicesServiceLevelObjectivesCreateRequest extends SpeakeasyBase {
    pathParams: MonitoringServicesServiceLevelObjectivesCreatePathParams;
    queryParams: MonitoringServicesServiceLevelObjectivesCreateQueryParams;
    request?: shared.ServiceLevelObjective;
    security: MonitoringServicesServiceLevelObjectivesCreateSecurity;
}
export declare class MonitoringServicesServiceLevelObjectivesCreateResponse extends SpeakeasyBase {
    contentType: string;
    serviceLevelObjective?: shared.ServiceLevelObjective;
    statusCode: number;
}
