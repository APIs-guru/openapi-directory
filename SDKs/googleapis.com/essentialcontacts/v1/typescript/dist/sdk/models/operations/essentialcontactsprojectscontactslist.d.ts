import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EssentialcontactsProjectsContactsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class EssentialcontactsProjectsContactsListQueryParams extends SpeakeasyBase {
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
export declare class EssentialcontactsProjectsContactsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class EssentialcontactsProjectsContactsListRequest extends SpeakeasyBase {
    pathParams: EssentialcontactsProjectsContactsListPathParams;
    queryParams: EssentialcontactsProjectsContactsListQueryParams;
    security: EssentialcontactsProjectsContactsListSecurity;
}
export declare class EssentialcontactsProjectsContactsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudEssentialcontactsV1ListContactsResponse?: shared.GoogleCloudEssentialcontactsV1ListContactsResponse;
    statusCode: number;
}
