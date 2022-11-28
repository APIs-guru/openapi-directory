import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare const GetObjectStorageClustersServerList: readonly ["https://api.linode.com/v4"];
export declare class GetObjectStorageClusters200ApplicationJson extends SpeakeasyBase {
    data?: shared.ObjectStorageCluster[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetObjectStorageClustersDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetObjectStorageClustersRequest extends SpeakeasyBase {
    serverUrl?: string;
}
export declare class GetObjectStorageClustersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getObjectStorageClusters200ApplicationJsonObject?: GetObjectStorageClusters200ApplicationJson;
    getObjectStorageClustersDefaultApplicationJsonObject?: GetObjectStorageClustersDefaultApplicationJson;
}
