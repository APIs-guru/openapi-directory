import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentsTestCasesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsAgentsTestCasesCreateQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentsTestCasesCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsTestCasesCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsTestCasesCreateSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentsTestCasesCreateSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentsTestCasesCreateSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentsTestCasesCreateRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentsTestCasesCreatePathParams;
    queryParams: DialogflowProjectsLocationsAgentsTestCasesCreateQueryParams;
    request?: shared.GoogleCloudDialogflowCxV3TestCaseInput;
    security: DialogflowProjectsLocationsAgentsTestCasesCreateSecurity;
}
export declare class DialogflowProjectsLocationsAgentsTestCasesCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowCxV3TestCase?: shared.GoogleCloudDialogflowCxV3TestCase;
    statusCode: number;
}
