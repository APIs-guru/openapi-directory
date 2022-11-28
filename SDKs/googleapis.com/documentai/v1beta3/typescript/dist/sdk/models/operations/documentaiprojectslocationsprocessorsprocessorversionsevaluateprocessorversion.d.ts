import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluateProcessorVersionPathParams extends SpeakeasyBase {
    processorVersion: string;
}
export declare class DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluateProcessorVersionQueryParams extends SpeakeasyBase {
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
export declare class DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluateProcessorVersionSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluateProcessorVersionRequest extends SpeakeasyBase {
    pathParams: DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluateProcessorVersionPathParams;
    queryParams: DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluateProcessorVersionQueryParams;
    request?: shared.GoogleCloudDocumentaiV1beta3EvaluateProcessorVersionRequest;
    security: DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluateProcessorVersionSecurity;
}
export declare class DocumentaiProjectsLocationsProcessorsProcessorVersionsEvaluateProcessorVersionResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
