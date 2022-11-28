import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DocumentaiProjectsLocationsProcessorTypesListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DocumentaiProjectsLocationsProcessorTypesListQueryParams extends SpeakeasyBase {
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
export declare class DocumentaiProjectsLocationsProcessorTypesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DocumentaiProjectsLocationsProcessorTypesListRequest extends SpeakeasyBase {
    pathParams: DocumentaiProjectsLocationsProcessorTypesListPathParams;
    queryParams: DocumentaiProjectsLocationsProcessorTypesListQueryParams;
    security: DocumentaiProjectsLocationsProcessorTypesListSecurity;
}
export declare class DocumentaiProjectsLocationsProcessorTypesListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDocumentaiV1beta3ListProcessorTypesResponse?: shared.GoogleCloudDocumentaiV1beta3ListProcessorTypesResponse;
    statusCode: number;
}
