import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MonitoringServicesServiceLevelObjectivesGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare enum MonitoringServicesServiceLevelObjectivesGetViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED",
    Full = "FULL",
    Explicit = "EXPLICIT"
}
export declare class MonitoringServicesServiceLevelObjectivesGetQueryParams extends SpeakeasyBase {
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
    view?: MonitoringServicesServiceLevelObjectivesGetViewEnum;
}
export declare class MonitoringServicesServiceLevelObjectivesGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringServicesServiceLevelObjectivesGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringServicesServiceLevelObjectivesGetSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringServicesServiceLevelObjectivesGetSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringServicesServiceLevelObjectivesGetSecurity extends SpeakeasyBase {
    option1?: MonitoringServicesServiceLevelObjectivesGetSecurityOption1;
    option2?: MonitoringServicesServiceLevelObjectivesGetSecurityOption2;
    option3?: MonitoringServicesServiceLevelObjectivesGetSecurityOption3;
    option4?: MonitoringServicesServiceLevelObjectivesGetSecurityOption4;
}
export declare class MonitoringServicesServiceLevelObjectivesGetRequest extends SpeakeasyBase {
    pathParams: MonitoringServicesServiceLevelObjectivesGetPathParams;
    queryParams: MonitoringServicesServiceLevelObjectivesGetQueryParams;
    security: MonitoringServicesServiceLevelObjectivesGetSecurity;
}
export declare class MonitoringServicesServiceLevelObjectivesGetResponse extends SpeakeasyBase {
    contentType: string;
    serviceLevelObjective?: shared.ServiceLevelObjective;
    statusCode: number;
}
