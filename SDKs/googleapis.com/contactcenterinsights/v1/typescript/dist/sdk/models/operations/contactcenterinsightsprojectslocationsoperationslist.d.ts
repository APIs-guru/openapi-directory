import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContactcenterinsightsProjectsLocationsOperationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ContactcenterinsightsProjectsLocationsOperationsListQueryParams extends SpeakeasyBase {
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
export declare class ContactcenterinsightsProjectsLocationsOperationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContactcenterinsightsProjectsLocationsOperationsListRequest extends SpeakeasyBase {
    pathParams: ContactcenterinsightsProjectsLocationsOperationsListPathParams;
    queryParams: ContactcenterinsightsProjectsLocationsOperationsListQueryParams;
    security: ContactcenterinsightsProjectsLocationsOperationsListSecurity;
}
export declare class ContactcenterinsightsProjectsLocationsOperationsListResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningListOperationsResponse?: shared.GoogleLongrunningListOperationsResponse;
    statusCode: number;
}
