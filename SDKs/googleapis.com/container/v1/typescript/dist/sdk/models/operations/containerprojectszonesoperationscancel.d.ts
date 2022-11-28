import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContainerProjectsZonesOperationsCancelPathParams extends SpeakeasyBase {
    operationId: string;
    projectId: string;
    zone: string;
}
export declare class ContainerProjectsZonesOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class ContainerProjectsZonesOperationsCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContainerProjectsZonesOperationsCancelRequest extends SpeakeasyBase {
    pathParams: ContainerProjectsZonesOperationsCancelPathParams;
    queryParams: ContainerProjectsZonesOperationsCancelQueryParams;
    request?: shared.CancelOperationRequest;
    security: ContainerProjectsZonesOperationsCancelSecurity;
}
export declare class ContainerProjectsZonesOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
