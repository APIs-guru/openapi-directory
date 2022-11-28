import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreatePathParams;
    queryParams: DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateQueryParams;
    request?: shared.GoogleCloudDialogflowCxV3beta1Experiment;
    security: DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateSecurity;
}
export declare class DialogflowProjectsLocationsAgentsEnvironmentsExperimentsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowCxV3beta1Experiment?: shared.GoogleCloudDialogflowCxV3beta1Experiment;
    statusCode: number;
}
