import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContainerProjectsZonesOperationsGetPathParams extends SpeakeasyBase {
    operationId: string;
    projectId: string;
    zone: string;
}
export declare class ContainerProjectsZonesOperationsGetQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    name?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContainerProjectsZonesOperationsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContainerProjectsZonesOperationsGetRequest extends SpeakeasyBase {
    pathParams: ContainerProjectsZonesOperationsGetPathParams;
    queryParams: ContainerProjectsZonesOperationsGetQueryParams;
    security: ContainerProjectsZonesOperationsGetSecurity;
}
export declare class ContainerProjectsZonesOperationsGetResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
