import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsDeleteAgentPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsDeleteAgentQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsDeleteAgentSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsDeleteAgentSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsDeleteAgentSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsDeleteAgentSecurityOption1;
    option2?: DialogflowProjectsLocationsDeleteAgentSecurityOption2;
}
export declare class DialogflowProjectsLocationsDeleteAgentRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsDeleteAgentPathParams;
    queryParams: DialogflowProjectsLocationsDeleteAgentQueryParams;
    security: DialogflowProjectsLocationsDeleteAgentSecurity;
}
export declare class DialogflowProjectsLocationsDeleteAgentResponse extends SpeakeasyBase {
    contentType: string;
    googleProtobufEmpty?: Map<string, any>;
    statusCode: number;
}
