import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentVersionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsAgentVersionsListQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsAgentVersionsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentVersionsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentVersionsListSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentVersionsListSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentVersionsListSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentVersionsListRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentVersionsListPathParams;
    queryParams: DialogflowProjectsLocationsAgentVersionsListQueryParams;
    security: DialogflowProjectsLocationsAgentVersionsListSecurity;
}
export declare class DialogflowProjectsLocationsAgentVersionsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowV2ListVersionsResponse?: shared.GoogleCloudDialogflowV2ListVersionsResponse;
    statusCode: number;
}
