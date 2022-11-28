import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentsTestCasesBatchRunPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsAgentsTestCasesBatchRunQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentsTestCasesBatchRunSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsTestCasesBatchRunSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsTestCasesBatchRunSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentsTestCasesBatchRunSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentsTestCasesBatchRunSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentsTestCasesBatchRunRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentsTestCasesBatchRunPathParams;
    queryParams: DialogflowProjectsLocationsAgentsTestCasesBatchRunQueryParams;
    request?: shared.GoogleCloudDialogflowCxV3beta1BatchRunTestCasesRequest;
    security: DialogflowProjectsLocationsAgentsTestCasesBatchRunSecurity;
}
export declare class DialogflowProjectsLocationsAgentsTestCasesBatchRunResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
