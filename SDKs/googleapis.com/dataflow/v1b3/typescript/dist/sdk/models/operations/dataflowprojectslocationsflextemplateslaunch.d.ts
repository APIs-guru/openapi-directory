import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataflowProjectsLocationsFlexTemplatesLaunchPathParams extends SpeakeasyBase {
    location: string;
    projectId: string;
}
export declare class DataflowProjectsLocationsFlexTemplatesLaunchQueryParams extends SpeakeasyBase {
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
export declare class DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption3 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption4 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataflowProjectsLocationsFlexTemplatesLaunchSecurity extends SpeakeasyBase {
    option1?: DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption1;
    option2?: DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption2;
    option3?: DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption3;
    option4?: DataflowProjectsLocationsFlexTemplatesLaunchSecurityOption4;
}
export declare class DataflowProjectsLocationsFlexTemplatesLaunchRequest extends SpeakeasyBase {
    pathParams: DataflowProjectsLocationsFlexTemplatesLaunchPathParams;
    queryParams: DataflowProjectsLocationsFlexTemplatesLaunchQueryParams;
    request?: shared.LaunchFlexTemplateRequest;
    security: DataflowProjectsLocationsFlexTemplatesLaunchSecurity;
}
export declare class DataflowProjectsLocationsFlexTemplatesLaunchResponse extends SpeakeasyBase {
    contentType: string;
    launchFlexTemplateResponse?: shared.LaunchFlexTemplateResponse;
    statusCode: number;
}
