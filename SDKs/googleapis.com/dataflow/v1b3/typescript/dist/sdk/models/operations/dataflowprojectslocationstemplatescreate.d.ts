import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataflowProjectsLocationsTemplatesCreatePathParams extends SpeakeasyBase {
    location: string;
    projectId: string;
}
export declare class DataflowProjectsLocationsTemplatesCreateQueryParams extends SpeakeasyBase {
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
export declare class DataflowProjectsLocationsTemplatesCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsTemplatesCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsTemplatesCreateSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsTemplatesCreateSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsTemplatesCreateSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsLocationsTemplatesCreateSecurityOption1;
    option2?: DataflowProjectsLocationsTemplatesCreateSecurityOption2;
    option3?: DataflowProjectsLocationsTemplatesCreateSecurityOption3;
    option4?: DataflowProjectsLocationsTemplatesCreateSecurityOption4;
}
export declare class DataflowProjectsLocationsTemplatesCreateRequest extends SpeakeasyBase {
    pathParams: DataflowProjectsLocationsTemplatesCreatePathParams;
    queryParams: DataflowProjectsLocationsTemplatesCreateQueryParams;
    request?: shared.CreateJobFromTemplateRequest;
    security: DataflowProjectsLocationsTemplatesCreateSecurity;
}
export declare class DataflowProjectsLocationsTemplatesCreateResponse extends SpeakeasyBase {
    contentType: string;
    job?: shared.Job;
    statusCode: number;
}
