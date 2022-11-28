import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DocumentaiProjectsLocationsDocumentsBatchProcessPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DocumentaiProjectsLocationsDocumentsBatchProcessQueryParams extends SpeakeasyBase {
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
export declare class DocumentaiProjectsLocationsDocumentsBatchProcessSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DocumentaiProjectsLocationsDocumentsBatchProcessRequest extends SpeakeasyBase {
    pathParams: DocumentaiProjectsLocationsDocumentsBatchProcessPathParams;
    queryParams: DocumentaiProjectsLocationsDocumentsBatchProcessQueryParams;
    request?: shared.GoogleCloudDocumentaiV1beta2BatchProcessDocumentsRequest;
    security: DocumentaiProjectsLocationsDocumentsBatchProcessSecurity;
}
export declare class DocumentaiProjectsLocationsDocumentsBatchProcessResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
