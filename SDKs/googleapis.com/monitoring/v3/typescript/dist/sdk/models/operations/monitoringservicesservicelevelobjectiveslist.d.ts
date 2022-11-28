import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MonitoringServicesServiceLevelObjectivesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum MonitoringServicesServiceLevelObjectivesListViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED",
    Full = "FULL",
    Explicit = "EXPLICIT"
}
export declare class MonitoringServicesServiceLevelObjectivesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    view?: MonitoringServicesServiceLevelObjectivesListViewEnum;
}
export declare class MonitoringServicesServiceLevelObjectivesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringServicesServiceLevelObjectivesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringServicesServiceLevelObjectivesListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class MonitoringServicesServiceLevelObjectivesListSecurity extends SpeakeasyBase {
    option1?: MonitoringServicesServiceLevelObjectivesListSecurityOption1;
    option2?: MonitoringServicesServiceLevelObjectivesListSecurityOption2;
    option3?: MonitoringServicesServiceLevelObjectivesListSecurityOption3;
}
export declare class MonitoringServicesServiceLevelObjectivesListRequest extends SpeakeasyBase {
    pathParams: MonitoringServicesServiceLevelObjectivesListPathParams;
    queryParams: MonitoringServicesServiceLevelObjectivesListQueryParams;
    security: MonitoringServicesServiceLevelObjectivesListSecurity;
}
export declare class MonitoringServicesServiceLevelObjectivesListResponse extends SpeakeasyBase {
    contentType: string;
    listServiceLevelObjectivesResponse?: shared.ListServiceLevelObjectivesResponse;
    statusCode: number;
}
