import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessQueryParams extends SpeakeasyBase {
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
export declare class DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessRequest extends SpeakeasyBase {
    pathParams: DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessPathParams;
    queryParams: DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessQueryParams;
    request?: shared.GoogleCloudDocumentaiV1ProcessRequest;
    security: DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessSecurity;
}
export declare class DocumentaiProjectsLocationsProcessorsProcessorVersionsProcessResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDocumentaiV1ProcessResponse?: shared.GoogleCloudDocumentaiV1ProcessResponse;
    statusCode: number;
}
