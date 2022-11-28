import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentsTestCasesRunPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DialogflowProjectsLocationsAgentsTestCasesRunQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentsTestCasesRunSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsTestCasesRunSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsTestCasesRunSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentsTestCasesRunSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentsTestCasesRunSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentsTestCasesRunRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentsTestCasesRunPathParams;
    queryParams: DialogflowProjectsLocationsAgentsTestCasesRunQueryParams;
    request?: shared.GoogleCloudDialogflowCxV3beta1RunTestCaseRequest;
    security: DialogflowProjectsLocationsAgentsTestCasesRunSecurity;
}
export declare class DialogflowProjectsLocationsAgentsTestCasesRunResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
