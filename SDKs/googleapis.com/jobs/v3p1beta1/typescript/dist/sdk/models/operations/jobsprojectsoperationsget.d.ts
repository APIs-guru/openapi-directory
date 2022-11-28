import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JobsProjectsOperationsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class JobsProjectsOperationsGetQueryParams extends SpeakeasyBase {
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
}
export declare class JobsProjectsOperationsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsOperationsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class JobsProjectsOperationsGetSecurity extends SpeakeasyBase {
    option1?: JobsProjectsOperationsGetSecurityOption1;
    option2?: JobsProjectsOperationsGetSecurityOption2;
}
export declare class JobsProjectsOperationsGetRequest extends SpeakeasyBase {
    pathParams: JobsProjectsOperationsGetPathParams;
    queryParams: JobsProjectsOperationsGetQueryParams;
    security: JobsProjectsOperationsGetSecurity;
}
export declare class JobsProjectsOperationsGetResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
