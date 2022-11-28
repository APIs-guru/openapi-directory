import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataflowProjectsLocationsTemplatesLaunchPathParams extends SpeakeasyBase {
    location: string;
    projectId: string;
}
export declare class DataflowProjectsLocationsTemplatesLaunchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    dynamicTemplateGcsPath?: string;
    dynamicTemplateStagingLocation?: string;
    fields?: string;
    gcsPath?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    validateOnly?: boolean;
}
export declare class DataflowProjectsLocationsTemplatesLaunchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsTemplatesLaunchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsTemplatesLaunchSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsTemplatesLaunchSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsTemplatesLaunchSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsLocationsTemplatesLaunchSecurityOption1;
    option2?: DataflowProjectsLocationsTemplatesLaunchSecurityOption2;
    option3?: DataflowProjectsLocationsTemplatesLaunchSecurityOption3;
    option4?: DataflowProjectsLocationsTemplatesLaunchSecurityOption4;
}
export declare class DataflowProjectsLocationsTemplatesLaunchRequest extends SpeakeasyBase {
    pathParams: DataflowProjectsLocationsTemplatesLaunchPathParams;
    queryParams: DataflowProjectsLocationsTemplatesLaunchQueryParams;
    request?: shared.LaunchTemplateParameters;
    security: DataflowProjectsLocationsTemplatesLaunchSecurity;
}
export declare class DataflowProjectsLocationsTemplatesLaunchResponse extends SpeakeasyBase {
    contentType: string;
    launchTemplateResponse?: shared.LaunchTemplateResponse;
    statusCode: number;
}
