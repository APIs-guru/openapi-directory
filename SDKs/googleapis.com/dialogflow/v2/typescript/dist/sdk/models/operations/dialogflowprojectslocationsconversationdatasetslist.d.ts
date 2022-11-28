import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DialogflowProjectsLocationsConversationDatasetsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DialogflowProjectsLocationsConversationDatasetsListQueryParams extends SpeakeasyBase {
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
export declare class DialogflowProjectsLocationsConversationDatasetsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsConversationDatasetsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DialogflowProjectsLocationsConversationDatasetsListSecurity extends SpeakeasyBase {
    option1?: DialogflowProjectsLocationsConversationDatasetsListSecurityOption1;
    option2?: DialogflowProjectsLocationsConversationDatasetsListSecurityOption2;
}
export declare class DialogflowProjectsLocationsConversationDatasetsListRequest extends SpeakeasyBase {
    pathParams: DialogflowProjectsLocationsConversationDatasetsListPathParams;
    queryParams: DialogflowProjectsLocationsConversationDatasetsListQueryParams;
    security: DialogflowProjectsLocationsConversationDatasetsListSecurity;
}
export declare class DialogflowProjectsLocationsConversationDatasetsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDialogflowV2ListConversationDatasetsResponse?: shared.GoogleCloudDialogflowV2ListConversationDatasetsResponse;
    statusCode: number;
}
