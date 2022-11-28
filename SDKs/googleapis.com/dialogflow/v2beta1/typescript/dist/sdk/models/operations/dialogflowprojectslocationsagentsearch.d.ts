import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentSearchPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsAgentSearchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DialogflowProjectsLocationsAgentSearchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentSearchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentSearchSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentSearchSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentSearchSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentSearchRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentSearchPathParams;
    queryParams: DialogflowProjectsLocationsAgentSearchQueryParams;
    security: DialogflowProjectsLocationsAgentSearchSecurity;
}
export declare class DialogflowProjectsLocationsAgentSearchResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowV2beta1SearchAgentsResponse?: shared.GoogleCloudDialogflowV2beta1SearchAgentsResponse;
    statusCode: number;
}
