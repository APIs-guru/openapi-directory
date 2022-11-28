import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContainerProjectsLocationsOperationsCancelPathParams extends SpeakeasyBase {
    name: string;
}
export declare class ContainerProjectsLocationsOperationsCancelQueryParams extends SpeakeasyBase {
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
export declare class ContainerProjectsLocationsOperationsCancelSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContainerProjectsLocationsOperationsCancelRequest extends SpeakeasyBase {
    pathParams: ContainerProjectsLocationsOperationsCancelPathParams;
    queryParams: ContainerProjectsLocationsOperationsCancelQueryParams;
    request?: shared.CancelOperationRequest;
    security: ContainerProjectsLocationsOperationsCancelSecurity;
}
export declare class ContainerProjectsLocationsOperationsCancelResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
