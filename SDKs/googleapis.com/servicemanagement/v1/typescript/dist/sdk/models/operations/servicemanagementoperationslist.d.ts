import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ServicemanagementOperationsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    name?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ServicemanagementOperationsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementOperationsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ServicemanagementOperationsListSecurity extends SpeakeasyBase {
    option1?: ServicemanagementOperationsListSecurityOption1;
    option2?: ServicemanagementOperationsListSecurityOption2;
}
export declare class ServicemanagementOperationsListRequest extends SpeakeasyBase {
    queryParams: ServicemanagementOperationsListQueryParams;
    security: ServicemanagementOperationsListSecurity;
}
export declare class ServicemanagementOperationsListResponse extends SpeakeasyBase {
    contentType: string;
    listOperationsResponse?: shared.ListOperationsResponse;
    statusCode: number;
}
