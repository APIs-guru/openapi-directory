import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentsFlowsTrainPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DialogflowProjectsLocationsAgentsFlowsTrainQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentsFlowsTrainSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsFlowsTrainSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsFlowsTrainSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentsFlowsTrainSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentsFlowsTrainSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentsFlowsTrainRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentsFlowsTrainPathParams;
    queryParams: DialogflowProjectsLocationsAgentsFlowsTrainQueryParams;
    request?: Map<string, any>;
    security: DialogflowProjectsLocationsAgentsFlowsTrainSecurity;
}
export declare class DialogflowProjectsLocationsAgentsFlowsTrainResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
