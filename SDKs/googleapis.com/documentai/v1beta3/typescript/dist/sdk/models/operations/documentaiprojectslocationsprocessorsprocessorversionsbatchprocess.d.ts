import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DocumentaiProjectsLocationsProcessorsProcessorVersionsBatchProcessPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DocumentaiProjectsLocationsProcessorsProcessorVersionsBatchProcessQueryParams extends SpeakeasyBase {
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
export declare class DocumentaiProjectsLocationsProcessorsProcessorVersionsBatchProcessSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DocumentaiProjectsLocationsProcessorsProcessorVersionsBatchProcessRequest extends SpeakeasyBase {
    pathParams: DocumentaiProjectsLocationsProcessorsProcessorVersionsBatchProcessPathParams;
    queryParams: DocumentaiProjectsLocationsProcessorsProcessorVersionsBatchProcessQueryParams;
    request?: shared.GoogleCloudDocumentaiV1beta3BatchProcessRequest;
    security: DocumentaiProjectsLocationsProcessorsProcessorVersionsBatchProcessSecurity;
}
export declare class DocumentaiProjectsLocationsProcessorsProcessorVersionsBatchProcessResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
