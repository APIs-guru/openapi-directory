import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeQueryParams extends SpeakeasyBase {
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
export declare class ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeRequest extends SpeakeasyBase {
    pathParams: ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzePathParams;
    queryParams: ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeQueryParams;
    request?: shared.GoogleCloudContactcenterinsightsV1BulkAnalyzeConversationsRequest;
    security: ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeSecurity;
}
export declare class ContactcenterinsightsProjectsLocationsConversationsBulkAnalyzeResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
