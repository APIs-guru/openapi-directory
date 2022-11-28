import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContainerProjectsLocationsClustersGetJwksPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class ContainerProjectsLocationsClustersGetJwksQueryParams extends SpeakeasyBase {
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
export declare class ContainerProjectsLocationsClustersGetJwksRequest extends SpeakeasyBase {
    pathParams: ContainerProjectsLocationsClustersGetJwksPathParams;
    queryParams: ContainerProjectsLocationsClustersGetJwksQueryParams;
}
export declare class ContainerProjectsLocationsClustersGetJwksResponse extends SpeakeasyBase {
    contentType: string;
    getJsonWebKeysResponse?: shared.GetJsonWebKeysResponse;
    statusCode: number;
}
