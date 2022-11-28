import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataflowProjectsTemplatesCreatePathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class DataflowProjectsTemplatesCreateQueryParams extends SpeakeasyBase {
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
export declare class DataflowProjectsTemplatesCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsTemplatesCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsTemplatesCreateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsTemplatesCreateSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsTemplatesCreateSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsTemplatesCreateSecurityOption1;
    option2?: DataflowProjectsTemplatesCreateSecurityOption2;
    option3?: DataflowProjectsTemplatesCreateSecurityOption3;
    option4?: DataflowProjectsTemplatesCreateSecurityOption4;
}
export declare class DataflowProjectsTemplatesCreateRequest extends SpeakeasyBase {
    pathParams: DataflowProjectsTemplatesCreatePathParams;
    queryParams: DataflowProjectsTemplatesCreateQueryParams;
    request?: shared.CreateJobFromTemplateRequest;
    security: DataflowProjectsTemplatesCreateSecurity;
}
export declare class DataflowProjectsTemplatesCreateResponse extends SpeakeasyBase {
    contentType: string;
    job?: shared.Job;
    statusCode: number;
}
