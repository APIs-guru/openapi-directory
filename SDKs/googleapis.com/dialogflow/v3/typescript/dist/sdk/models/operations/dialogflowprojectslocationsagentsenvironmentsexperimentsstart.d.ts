import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartPathParams;
    queryParams: DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartQueryParams;
    request?: Map<string, any>;
    security: DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartSecurity;
}
export declare class DialogflowProjectsLocationsAgentsEnvironmentsExperimentsStartResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowCxV3Experiment?: shared.GoogleCloudDialogflowCxV3Experiment;
    statusCode: number;
}
