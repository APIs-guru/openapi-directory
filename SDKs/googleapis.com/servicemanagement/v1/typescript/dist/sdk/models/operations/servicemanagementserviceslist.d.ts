import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicemanagementServicesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    consumerId?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    producerProjectId?: string;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ServicemanagementServicesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementServicesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementServicesListSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementServicesListSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementServicesListSecurity extends SpeakeasyBase {
    option1?: ServicemanagementServicesListSecurityOption1;
    option2?: ServicemanagementServicesListSecurityOption2;
    option3?: ServicemanagementServicesListSecurityOption3;
    option4?: ServicemanagementServicesListSecurityOption4;
}
export declare class ServicemanagementServicesListRequest extends SpeakeasyBase {
    queryParams: ServicemanagementServicesListQueryParams;
    security: ServicemanagementServicesListSecurity;
}
export declare class ServicemanagementServicesListResponse extends SpeakeasyBase {
    contentType: string;
    listServicesResponse?: shared.ListServicesResponse;
    statusCode: number;
}
