import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DocumentaiProjectsLocationsProcessorsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class DocumentaiProjectsLocationsProcessorsCreateQueryParams extends SpeakeasyBase {
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
export declare class DocumentaiProjectsLocationsProcessorsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DocumentaiProjectsLocationsProcessorsCreateRequest extends SpeakeasyBase {
    pathParams: DocumentaiProjectsLocationsProcessorsCreatePathParams;
    queryParams: DocumentaiProjectsLocationsProcessorsCreateQueryParams;
    request?: shared.GoogleCloudDocumentaiV1ProcessorInput;
    security: DocumentaiProjectsLocationsProcessorsCreateSecurity;
}
export declare class DocumentaiProjectsLocationsProcessorsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudDocumentaiV1Processor?: shared.GoogleCloudDocumentaiV1Processor;
    statusCode: number;
}
