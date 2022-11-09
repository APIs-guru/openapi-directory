import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class TpuProjectsLocationsNodesCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class TpuProjectsLocationsNodesCreateQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    nodeId?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    requestId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class TpuProjectsLocationsNodesCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TpuProjectsLocationsNodesCreateRequest extends SpeakeasyBase {
    pathParams: TpuProjectsLocationsNodesCreatePathParams;
    queryParams: TpuProjectsLocationsNodesCreateQueryParams;
    request?: shared.Node;
    security: TpuProjectsLocationsNodesCreateSecurity;
}
export declare class TpuProjectsLocationsNodesCreateResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
