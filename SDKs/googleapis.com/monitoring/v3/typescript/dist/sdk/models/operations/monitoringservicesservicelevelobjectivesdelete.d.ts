import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MonitoringServicesServiceLevelObjectivesDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class MonitoringServicesServiceLevelObjectivesDeleteQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    force?: boolean;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MonitoringServicesServiceLevelObjectivesDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringServicesServiceLevelObjectivesDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringServicesServiceLevelObjectivesDeleteSecurity extends SpeakeasyBase {
    option1?: MonitoringServicesServiceLevelObjectivesDeleteSecurityOption1;
    option2?: MonitoringServicesServiceLevelObjectivesDeleteSecurityOption2;
}
export declare class MonitoringServicesServiceLevelObjectivesDeleteRequest extends SpeakeasyBase {
    pathParams: MonitoringServicesServiceLevelObjectivesDeletePathParams;
    queryParams: MonitoringServicesServiceLevelObjectivesDeleteQueryParams;
    security: MonitoringServicesServiceLevelObjectivesDeleteSecurity;
}
export declare class MonitoringServicesServiceLevelObjectivesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
