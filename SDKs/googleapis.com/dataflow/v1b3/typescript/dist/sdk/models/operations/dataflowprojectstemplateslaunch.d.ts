import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataflowProjectsTemplatesLaunchPathParams extends SpeakeasyBase {
    projectId: string;
}
export declare class DataflowProjectsTemplatesLaunchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    dynamicTemplateGcsPath?: string;
    dynamicTemplateStagingLocation?: string;
    fields?: string;
    gcsPath?: string;
    key?: string;
    location?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    validateOnly?: boolean;
}
export declare class DataflowProjectsTemplatesLaunchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsTemplatesLaunchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsTemplatesLaunchSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsTemplatesLaunchSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsTemplatesLaunchSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsTemplatesLaunchSecurityOption1;
    option2?: DataflowProjectsTemplatesLaunchSecurityOption2;
    option3?: DataflowProjectsTemplatesLaunchSecurityOption3;
    option4?: DataflowProjectsTemplatesLaunchSecurityOption4;
}
export declare class DataflowProjectsTemplatesLaunchRequest extends SpeakeasyBase {
    pathParams: DataflowProjectsTemplatesLaunchPathParams;
    queryParams: DataflowProjectsTemplatesLaunchQueryParams;
    request?: shared.LaunchTemplateParameters;
    security: DataflowProjectsTemplatesLaunchSecurity;
}
export declare class DataflowProjectsTemplatesLaunchResponse extends SpeakeasyBase {
    contentType: string;
    launchTemplateResponse?: shared.LaunchTemplateResponse;
    statusCode: number;
}
