import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentsEnvironmentsRunContinuousTestPathParams extends SpeakeasyBase {
    environment: string;
}
export declare class DialogflowProjectsLocationsAgentsEnvironmentsRunContinuousTestQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentsEnvironmentsRunContinuousTestSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsEnvironmentsRunContinuousTestSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsEnvironmentsRunContinuousTestSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentsEnvironmentsRunContinuousTestSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentsEnvironmentsRunContinuousTestSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentsEnvironmentsRunContinuousTestRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentsEnvironmentsRunContinuousTestPathParams;
    queryParams: DialogflowProjectsLocationsAgentsEnvironmentsRunContinuousTestQueryParams;
    request?: Map<string, any>;
    security: DialogflowProjectsLocationsAgentsEnvironmentsRunContinuousTestSecurity;
}
export declare class DialogflowProjectsLocationsAgentsEnvironmentsRunContinuousTestResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
