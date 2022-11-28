import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContactcenterinsightsProjectsLocationsConversationsIngestPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ContactcenterinsightsProjectsLocationsConversationsIngestQueryParams extends SpeakeasyBase {
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
export declare class ContactcenterinsightsProjectsLocationsConversationsIngestSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContactcenterinsightsProjectsLocationsConversationsIngestRequest extends SpeakeasyBase {
    pathParams: ContactcenterinsightsProjectsLocationsConversationsIngestPathParams;
    queryParams: ContactcenterinsightsProjectsLocationsConversationsIngestQueryParams;
    request?: shared.GoogleCloudContactcenterinsightsV1IngestConversationsRequest;
    security: ContactcenterinsightsProjectsLocationsConversationsIngestSecurity;
}
export declare class ContactcenterinsightsProjectsLocationsConversationsIngestResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
