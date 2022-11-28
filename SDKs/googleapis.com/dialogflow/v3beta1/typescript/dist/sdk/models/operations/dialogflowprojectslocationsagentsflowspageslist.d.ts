import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentsFlowsPagesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsAgentsFlowsPagesListQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentsFlowsPagesListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsFlowsPagesListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsFlowsPagesListSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentsFlowsPagesListSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentsFlowsPagesListSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentsFlowsPagesListRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentsFlowsPagesListPathParams;
    queryParams: DialogflowProjectsLocationsAgentsFlowsPagesListQueryParams;
    security: DialogflowProjectsLocationsAgentsFlowsPagesListSecurity;
}
export declare class DialogflowProjectsLocationsAgentsFlowsPagesListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowCxV3beta1ListPagesResponse?: shared.GoogleCloudDialogflowCxV3beta1ListPagesResponse;
    statusCode: number;
}
