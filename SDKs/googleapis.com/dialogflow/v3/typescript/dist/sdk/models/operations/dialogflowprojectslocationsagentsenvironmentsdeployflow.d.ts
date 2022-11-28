import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowPathParams extends SpeakeasyBase {
    environment: string;
}
export declare class DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowPathParams;
    queryParams: DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowQueryParams;
    request?: shared.GoogleCloudDialogflowCxV3DeployFlowRequest;
    security: DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowSecurity;
}
export declare class DialogflowProjectsLocationsAgentsEnvironmentsDeployFlowResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
