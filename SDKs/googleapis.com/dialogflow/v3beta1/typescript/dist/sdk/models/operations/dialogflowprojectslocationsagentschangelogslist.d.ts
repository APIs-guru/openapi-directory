import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsAgentsChangelogsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsAgentsChangelogsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DialogflowProjectsLocationsAgentsChangelogsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsChangelogsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsAgentsChangelogsListSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsAgentsChangelogsListSecurityOption1;
    option2?: DialogflowProjectsLocationsAgentsChangelogsListSecurityOption2;
}
export declare class DialogflowProjectsLocationsAgentsChangelogsListRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsAgentsChangelogsListPathParams;
    queryParams: DialogflowProjectsLocationsAgentsChangelogsListQueryParams;
    security: DialogflowProjectsLocationsAgentsChangelogsListSecurity;
}
export declare class DialogflowProjectsLocationsAgentsChangelogsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowCxV3beta1ListChangelogsResponse?: shared.GoogleCloudDialogflowCxV3beta1ListChangelogsResponse;
    statusCode: number;
}
