import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateLkeClusterRequestBody extends SpeakeasyBase {
    k8sVersion: string;
    label: string;
    nodePools: shared.LkeNodePoolRequestBody[];
    region: string;
    tags?: string[];
}
export declare class CreateLkeClusterSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class CreateLkeClusterDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class CreateLkeClusterRequest extends SpeakeasyBase {
    request?: CreateLkeClusterRequestBody;
    security: CreateLkeClusterSecurity;
}
export declare class CreateLkeClusterResponse extends SpeakeasyBase {
    contentType: string;
    lkeCluster?: shared.LkeCluster;
    statusCode: number;
    createLkeClusterDefaultApplicationJsonObject?: CreateLkeClusterDefaultApplicationJson;
}
