import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionPathParams extends SpeakeasyBase {
    processor: string;
}
export declare class DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionQueryParams extends SpeakeasyBase {
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
export declare class DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionRequest extends SpeakeasyBase {
    pathParams: DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionPathParams;
    queryParams: DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionQueryParams;
    request?: shared.GoogleCloudDocumentaiV1SetDefaultProcessorVersionRequest;
    security: DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionSecurity;
}
export declare class DocumentaiProjectsLocationsProcessorsSetDefaultProcessorVersionResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
