import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DocumentaiUiv1beta3ProjectsLocationsOperationsListPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DocumentaiUiv1beta3ProjectsLocationsOperationsListQueryParams extends SpeakeasyBase {
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
export declare class DocumentaiUiv1beta3ProjectsLocationsOperationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DocumentaiUiv1beta3ProjectsLocationsOperationsListRequest extends SpeakeasyBase {
    pathParams: DocumentaiUiv1beta3ProjectsLocationsOperationsListPathParams;
    queryParams: DocumentaiUiv1beta3ProjectsLocationsOperationsListQueryParams;
    security: DocumentaiUiv1beta3ProjectsLocationsOperationsListSecurity;
}
export declare class DocumentaiUiv1beta3ProjectsLocationsOperationsListResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningListOperationsResponse?: shared.GoogleLongrunningListOperationsResponse;
    statusCode: number;
}
