import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class TpuProjectsLocationsNodesReimagePathParams extends SpeakeasyBase {
    name: string;
}
export declare class TpuProjectsLocationsNodesReimageQueryParams extends SpeakeasyBase {
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
export declare class TpuProjectsLocationsNodesReimageSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class TpuProjectsLocationsNodesReimageRequest extends SpeakeasyBase {
    pathParams: TpuProjectsLocationsNodesReimagePathParams;
    queryParams: TpuProjectsLocationsNodesReimageQueryParams;
    request?: shared.ReimageNodeRequest;
    security: TpuProjectsLocationsNodesReimageSecurity;
}
export declare class TpuProjectsLocationsNodesReimageResponse extends SpeakeasyBase {
    contentType: string;
    operation?: shared.Operation;
    statusCode: number;
}
