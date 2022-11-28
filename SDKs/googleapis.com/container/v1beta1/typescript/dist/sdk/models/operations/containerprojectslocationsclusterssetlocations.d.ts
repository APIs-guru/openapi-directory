import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContainerProjectsLocationsClustersSetLocationsPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ContainerProjectsLocationsClustersSetLocationsQueryParams extends SpeakeasyBase {
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
export declare class ContainerProjectsLocationsClustersSetLocationsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContainerProjectsLocationsClustersSetLocationsRequest extends SpeakeasyBase {
    pathParams: ContainerProjectsLocationsClustersSetLocationsPathParams;
    queryParams: ContainerProjectsLocationsClustersSetLocationsQueryParams;
    request?: shared.SetLocationsRequest;
    security: ContainerProjectsLocationsClustersSetLocationsSecurity;
}
export declare class ContainerProjectsLocationsClustersSetLocationsResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
