import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStopPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStopQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStopSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStopSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStopSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStopSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStopSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStopRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStopPathParams;
    queryParams: DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStopQueryParams;
    request?: Map<string, any>;
    security: DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStopSecurity;
}
export declare class DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStopResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowCxV3beta1Experiment?: shared.GoogleCloudDialogflowCxV3beta1Experiment;
    statusCode: number;
}
