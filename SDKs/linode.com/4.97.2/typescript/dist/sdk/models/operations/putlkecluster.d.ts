import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutLkeClusterPathParams extends SpeakeasyBase {
    clusterId: number;
}
export declare class PutLkeClusterSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class PutLkeClusterRequest extends SpeakeasyBase {
    pathParams: PutLkeClusterPathParams;
    request?: any;
    security: PutLkeClusterSecurity;
}
export declare class PutLkeClusterResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    putLkeCluster200ApplicationJsonAny?: any;
}
