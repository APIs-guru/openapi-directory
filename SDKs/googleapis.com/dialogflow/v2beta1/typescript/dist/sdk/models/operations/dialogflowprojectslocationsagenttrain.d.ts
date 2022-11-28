import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentTrainPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsAgentTrainQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentTrainSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentTrainSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentTrainSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentTrainSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentTrainSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentTrainRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentTrainPathParams;
    queryParams: DialogflowProjectsLocationsAgentTrainQueryParams;
    request?: Map<string, any>;
    security: DialogflowProjectsLocationsAgentTrainSecurity;
}
export declare class DialogflowProjectsLocationsAgentTrainResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
