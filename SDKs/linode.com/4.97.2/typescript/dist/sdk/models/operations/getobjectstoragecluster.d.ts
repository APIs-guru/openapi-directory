import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const GetObjectStorageClusterServerList: readonly ["https://api.linode.com/v4"];
export declare class GetObjectStorageClusterPathParams extends SpeakeasyBase {
    clusterId: string;
}
export declare class GetObjectStorageClusterDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetObjectStorageClusterRequest extends SpeakeasyBase {
    serverUrl?: string;
    pathParams: GetObjectStorageClusterPathParams;
}
export declare class GetObjectStorageClusterResponse extends SpeakeasyBase {
    contentType: string;
    objectStorageCluster?: shared.ObjectStorageCluster;
    statusCode: number;
    getObjectStorageClusterDefaultApplicationJsonObject?: GetObjectStorageClusterDefaultApplicationJson;
}
