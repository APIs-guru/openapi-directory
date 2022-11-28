import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentsFlowsVersionsLoadPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DialogflowProjectsLocationsAgentsFlowsVersionsLoadQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentsFlowsVersionsLoadSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsFlowsVersionsLoadSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsFlowsVersionsLoadSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentsFlowsVersionsLoadSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentsFlowsVersionsLoadSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentsFlowsVersionsLoadRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentsFlowsVersionsLoadPathParams;
    queryParams: DialogflowProjectsLocationsAgentsFlowsVersionsLoadQueryParams;
    request?: shared.GoogleCloudDialogflowCxV3beta1LoadVersionRequest;
    security: DialogflowProjectsLocationsAgentsFlowsVersionsLoadSecurity;
}
export declare class DialogflowProjectsLocationsAgentsFlowsVersionsLoadResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
