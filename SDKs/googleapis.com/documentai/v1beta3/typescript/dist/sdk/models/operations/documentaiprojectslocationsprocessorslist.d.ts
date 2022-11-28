import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DocumentaiProjectsLocationsProcessorsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DocumentaiProjectsLocationsProcessorsListQueryParams extends SpeakeasyBase {
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
export declare class DocumentaiProjectsLocationsProcessorsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DocumentaiProjectsLocationsProcessorsListRequest extends SpeakeasyBase {
    pathParams: DocumentaiProjectsLocationsProcessorsListPathParams;
    queryParams: DocumentaiProjectsLocationsProcessorsListQueryParams;
    security: DocumentaiProjectsLocationsProcessorsListSecurity;
}
export declare class DocumentaiProjectsLocationsProcessorsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDocumentaiV1beta3ListProcessorsResponse?: shared.GoogleCloudDocumentaiV1beta3ListProcessorsResponse;
    statusCode: number;
}
