import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DocumentaiProjectsLocationsProcessorsProcessorVersionsUndeployPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DocumentaiProjectsLocationsProcessorsProcessorVersionsUndeployQueryParams extends SpeakeasyBase {
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
export declare class DocumentaiProjectsLocationsProcessorsProcessorVersionsUndeploySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DocumentaiProjectsLocationsProcessorsProcessorVersionsUndeployRequest extends SpeakeasyBase {
    pathParams: DocumentaiProjectsLocationsProcessorsProcessorVersionsUndeployPathParams;
    queryParams: DocumentaiProjectsLocationsProcessorsProcessorVersionsUndeployQueryParams;
    request?: Map<string, any>;
    security: DocumentaiProjectsLocationsProcessorsProcessorVersionsUndeploySecurity;
}
export declare class DocumentaiProjectsLocationsProcessorsProcessorVersionsUndeployResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
