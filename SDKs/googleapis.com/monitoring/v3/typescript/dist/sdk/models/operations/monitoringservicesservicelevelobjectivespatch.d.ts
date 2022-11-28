import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MonitoringServicesServiceLevelObjectivesPatchPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MonitoringServicesServiceLevelObjectivesPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MonitoringServicesServiceLevelObjectivesPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringServicesServiceLevelObjectivesPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringServicesServiceLevelObjectivesPatchSecurity extends SpeakeasyBase {
    option1?: MonitoringServicesServiceLevelObjectivesPatchSecurityOption1;
    option2?: MonitoringServicesServiceLevelObjectivesPatchSecurityOption2;
}
export declare class MonitoringServicesServiceLevelObjectivesPatchRequest extends SpeakeasyBase {
    pathParams: MonitoringServicesServiceLevelObjectivesPatchPathParams;
    queryParams: MonitoringServicesServiceLevelObjectivesPatchQueryParams;
    request?: shared.ServiceLevelObjective;
    security: MonitoringServicesServiceLevelObjectivesPatchSecurity;
}
export declare class MonitoringServicesServiceLevelObjectivesPatchResponse extends SpeakeasyBase {
    contentType: string;
    serviceLevelObjective?: shared.ServiceLevelObjective;
    statusCode: number;
}
