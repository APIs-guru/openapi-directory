import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DocumentaiProjectsLocationsProcessorsProcessorVersionsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DocumentaiProjectsLocationsProcessorsProcessorVersionsListQueryParams extends SpeakeasyBase {
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
export declare class DocumentaiProjectsLocationsProcessorsProcessorVersionsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DocumentaiProjectsLocationsProcessorsProcessorVersionsListRequest extends SpeakeasyBase {
    pathParams: DocumentaiProjectsLocationsProcessorsProcessorVersionsListPathParams;
    queryParams: DocumentaiProjectsLocationsProcessorsProcessorVersionsListQueryParams;
    security: DocumentaiProjectsLocationsProcessorsProcessorVersionsListSecurity;
}
export declare class DocumentaiProjectsLocationsProcessorsProcessorVersionsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDocumentaiV1beta3ListProcessorVersionsResponse?: shared.GoogleCloudDocumentaiV1beta3ListProcessorVersionsResponse;
    statusCode: number;
}
