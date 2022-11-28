import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployPathParams extends SpeakeasyBase {
    name: string;
}
export declare class DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployQueryParams extends SpeakeasyBase {
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
export declare class DocumentaiProjectsLocationsProcessorsProcessorVersionsDeploySecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployRequest extends SpeakeasyBase {
    pathParams: DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployPathParams;
    queryParams: DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployQueryParams;
    request?: Map<string, any>;
    security: DocumentaiProjectsLocationsProcessorsProcessorVersionsDeploySecurity;
}
export declare class DocumentaiProjectsLocationsProcessorsProcessorVersionsDeployResponse extends SpeakeasyBase {
    contentType: string;
    googleLongrunningOperation?: shared.GoogleLongrunningOperation;
    statusCode: number;
}
