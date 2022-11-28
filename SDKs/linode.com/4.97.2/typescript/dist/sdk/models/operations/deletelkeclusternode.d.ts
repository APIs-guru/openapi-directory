import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteLkeClusterNodePathParams extends SpeakeasyBase {
    clusterId: number;
    nodeId: string;
}
export declare class DeleteLkeClusterNodeSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class DeleteLkeClusterNodeDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class DeleteLkeClusterNodeRequest extends SpeakeasyBase {
    pathParams: DeleteLkeClusterNodePathParams;
    security: DeleteLkeClusterNodeSecurity;
}
export declare class DeleteLkeClusterNodeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteLkeClusterNode200ApplicationJsonObject?: Map<string, any>;
    deleteLkeClusterNodeDefaultApplicationJsonObject?: DeleteLkeClusterNodeDefaultApplicationJson;
}
