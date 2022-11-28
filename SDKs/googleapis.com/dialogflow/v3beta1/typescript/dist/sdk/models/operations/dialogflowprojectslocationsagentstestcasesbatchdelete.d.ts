import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentsTestCasesBatchDeletePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsAgentsTestCasesBatchDeleteQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentsTestCasesBatchDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsTestCasesBatchDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsTestCasesBatchDeleteSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentsTestCasesBatchDeleteSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentsTestCasesBatchDeleteSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentsTestCasesBatchDeleteRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentsTestCasesBatchDeletePathParams;
    queryParams: DialogflowProjectsLocationsAgentsTestCasesBatchDeleteQueryParams;
    request?: shared.GoogleCloudDialogflowCxV3beta1BatchDeleteTestCasesRequest;
    security: DialogflowProjectsLocationsAgentsTestCasesBatchDeleteSecurity;
}
export declare class DialogflowProjectsLocationsAgentsTestCasesBatchDeleteResponse extends SpeakeasyBase {
    contentType: string;
    googleProtobufEmpty?: Map<string, any>;
    statusCode: number;
}
