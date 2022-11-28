import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JobsProjectsTenantsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class JobsProjectsTenantsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
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
export declare class JobsProjectsTenantsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsTenantsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsTenantsListSecurity extends SpeakeasyBase {
    option1?: JobsProjectsTenantsListSecurityOption1;
    option2?: JobsProjectsTenantsListSecurityOption2;
}
export declare class JobsProjectsTenantsListRequest extends SpeakeasyBase {
    pathParams: JobsProjectsTenantsListPathParams;
    queryParams: JobsProjectsTenantsListQueryParams;
    security: JobsProjectsTenantsListSecurity;
}
export declare class JobsProjectsTenantsListResponse extends SpeakeasyBase {
    contentType: string;
    listTenantsResponse?: shared.ListTenantsResponse;
    statusCode: number;
}
