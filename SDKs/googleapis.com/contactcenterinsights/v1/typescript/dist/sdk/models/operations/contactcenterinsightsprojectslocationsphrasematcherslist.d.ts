import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContactcenterinsightsProjectsLocationsPhraseMatchersListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ContactcenterinsightsProjectsLocationsPhraseMatchersListQueryParams extends SpeakeasyBase {
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
export declare class ContactcenterinsightsProjectsLocationsPhraseMatchersListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContactcenterinsightsProjectsLocationsPhraseMatchersListRequest extends SpeakeasyBase {
    pathParams: ContactcenterinsightsProjectsLocationsPhraseMatchersListPathParams;
    queryParams: ContactcenterinsightsProjectsLocationsPhraseMatchersListQueryParams;
    security: ContactcenterinsightsProjectsLocationsPhraseMatchersListSecurity;
}
export declare class ContactcenterinsightsProjectsLocationsPhraseMatchersListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudContactcenterinsightsV1ListPhraseMatchersResponse?: shared.GoogleCloudContactcenterinsightsV1ListPhraseMatchersResponse;
    statusCode: number;
}
