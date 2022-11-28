import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DataprocProjectsRegionsClustersInjectCredentialsPathParams extends SpeakeasyBase {
    cluster: string;
    project: string;
    region: string;
}
export declare class DataprocProjectsRegionsClustersInjectCredentialsQueryParams extends SpeakeasyBase {
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
export declare class DataprocProjectsRegionsClustersInjectCredentialsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DataprocProjectsRegionsClustersInjectCredentialsRequest extends SpeakeasyBase {
    pathParams: DataprocProjectsRegionsClustersInjectCredentialsPathParams;
    queryParams: DataprocProjectsRegionsClustersInjectCredentialsQueryParams;
    request?: shared.InjectCredentialsRequest;
    security: DataprocProjectsRegionsClustersInjectCredentialsSecurity;
}
export declare class DataprocProjectsRegionsClustersInjectCredentialsResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
