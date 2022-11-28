import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentsFlowsVersionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsAgentsFlowsVersionsListQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentsFlowsVersionsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsFlowsVersionsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsFlowsVersionsListSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentsFlowsVersionsListSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentsFlowsVersionsListSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentsFlowsVersionsListRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentsFlowsVersionsListPathParams;
    queryParams: DialogflowProjectsLocationsAgentsFlowsVersionsListQueryParams;
    security: DialogflowProjectsLocationsAgentsFlowsVersionsListSecurity;
}
export declare class DialogflowProjectsLocationsAgentsFlowsVersionsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowCxV3beta1ListVersionsResponse?: shared.GoogleCloudDialogflowCxV3beta1ListVersionsResponse;
    statusCode: number;
}
