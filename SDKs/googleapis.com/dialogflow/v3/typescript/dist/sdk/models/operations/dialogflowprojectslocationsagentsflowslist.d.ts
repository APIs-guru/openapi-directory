import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentsFlowsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsAgentsFlowsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    languageCode?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DialogflowProjectsLocationsAgentsFlowsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsFlowsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsFlowsListSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentsFlowsListSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentsFlowsListSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentsFlowsListRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentsFlowsListPathParams;
    queryParams: DialogflowProjectsLocationsAgentsFlowsListQueryParams;
    security: DialogflowProjectsLocationsAgentsFlowsListSecurity;
}
export declare class DialogflowProjectsLocationsAgentsFlowsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowCxV3ListFlowsResponse?: shared.GoogleCloudDialogflowCxV3ListFlowsResponse;
    statusCode: number;
}
