import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentsFlowsVersionsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsAgentsFlowsVersionsCreateQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentsFlowsVersionsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsFlowsVersionsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsFlowsVersionsCreateSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentsFlowsVersionsCreateSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentsFlowsVersionsCreateSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentsFlowsVersionsCreateRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentsFlowsVersionsCreatePathParams;
    queryParams: DialogflowProjectsLocationsAgentsFlowsVersionsCreateQueryParams;
    request?: shared.GoogleCloudDialogflowCxV3VersionInput;
    security: DialogflowProjectsLocationsAgentsFlowsVersionsCreateSecurity;
}
export declare class DialogflowProjectsLocationsAgentsFlowsVersionsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
