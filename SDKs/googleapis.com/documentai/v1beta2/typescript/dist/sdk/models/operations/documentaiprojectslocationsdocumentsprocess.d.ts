import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DocumentaiProjectsLocationsDocumentsProcessPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DocumentaiProjectsLocationsDocumentsProcessQueryParams extends SpeakeasyBase {
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
export declare class DocumentaiProjectsLocationsDocumentsProcessSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DocumentaiProjectsLocationsDocumentsProcessRequest extends SpeakeasyBase {
    pathParams: DocumentaiProjectsLocationsDocumentsProcessPathParams;
    queryParams: DocumentaiProjectsLocationsDocumentsProcessQueryParams;
    request?: shared.GoogleCloudDocumentaiV1beta2ProcessDocumentRequest;
    security: DocumentaiProjectsLocationsDocumentsProcessSecurity;
}
export declare class DocumentaiProjectsLocationsDocumentsProcessResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDocumentaiV1beta2Document?: shared.GoogleCloudDocumentaiV1beta2Document;
    statusCode: number;
}
