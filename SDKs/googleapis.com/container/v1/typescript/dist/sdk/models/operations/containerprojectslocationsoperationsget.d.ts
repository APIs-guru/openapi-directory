import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContainerProjectsLocationsOperationsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ContainerProjectsLocationsOperationsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    operationId?: string;
    prettyPrint?: boolean;
    projectId?: string;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    zone?: string;
}
export declare class ContainerProjectsLocationsOperationsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContainerProjectsLocationsOperationsGetRequest extends SpeakeasyBase {
    pathParams: ContainerProjectsLocationsOperationsGetPathParams;
    queryParams: ContainerProjectsLocationsOperationsGetQueryParams;
    security: ContainerProjectsLocationsOperationsGetSecurity;
}
export declare class ContainerProjectsLocationsOperationsGetResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
