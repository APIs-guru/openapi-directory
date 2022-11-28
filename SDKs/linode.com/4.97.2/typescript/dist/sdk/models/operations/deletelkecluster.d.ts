import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteLkeClusterPathParams extends SpeakeasyBase {
    clusterId: number;
}
export declare class DeleteLkeClusterSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class DeleteLkeClusterDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class DeleteLkeClusterRequest extends SpeakeasyBase {
    pathParams: DeleteLkeClusterPathParams;
    security: DeleteLkeClusterSecurity;
}
export declare class DeleteLkeClusterResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteLkeCluster200ApplicationJsonObject?: Map<string, any>;
    deleteLkeClusterDefaultApplicationJsonObject?: DeleteLkeClusterDefaultApplicationJson;
}
