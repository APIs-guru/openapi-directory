import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DocumentaiProjectsLocationsProcessorsProcessorVersionsDeletePathParams extends SpeakeasyBase {
    name: string;
}
export declare class DocumentaiProjectsLocationsProcessorsProcessorVersionsDeleteQueryParams extends SpeakeasyBase {
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
export declare class DocumentaiProjectsLocationsProcessorsProcessorVersionsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DocumentaiProjectsLocationsProcessorsProcessorVersionsDeleteRequest extends SpeakeasyBase {
    pathParams: DocumentaiProjectsLocationsProcessorsProcessorVersionsDeletePathParams;
    queryParams: DocumentaiProjectsLocationsProcessorsProcessorVersionsDeleteQueryParams;
    security: DocumentaiProjectsLocationsProcessorsProcessorVersionsDeleteSecurity;
}
export declare class DocumentaiProjectsLocationsProcessorsProcessorVersionsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
