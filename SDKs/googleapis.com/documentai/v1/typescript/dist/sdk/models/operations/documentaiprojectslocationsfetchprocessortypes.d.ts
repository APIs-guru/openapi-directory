import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DocumentaiProjectsLocationsFetchProcessorTypesPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DocumentaiProjectsLocationsFetchProcessorTypesQueryParams extends SpeakeasyBase {
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
export declare class DocumentaiProjectsLocationsFetchProcessorTypesSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DocumentaiProjectsLocationsFetchProcessorTypesRequest extends SpeakeasyBase {
    pathParams: DocumentaiProjectsLocationsFetchProcessorTypesPathParams;
    queryParams: DocumentaiProjectsLocationsFetchProcessorTypesQueryParams;
    security: DocumentaiProjectsLocationsFetchProcessorTypesSecurity;
}
export declare class DocumentaiProjectsLocationsFetchProcessorTypesResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDocumentaiV1FetchProcessorTypesResponse?: shared.GoogleCloudDocumentaiV1FetchProcessorTypesResponse;
    statusCode: number;
}
