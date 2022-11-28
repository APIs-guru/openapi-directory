import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRealmUserStorageIdSyncPathParams extends SpeakeasyBase {
    id: string;
    realm: string;
}
export declare class PostRealmUserStorageIdSyncQueryParams extends SpeakeasyBase {
    action?: string;
}
export declare class PostRealmUserStorageIdSyncRequest extends SpeakeasyBase {
    pathParams: PostRealmUserStorageIdSyncPathParams;
    queryParams: PostRealmUserStorageIdSyncQueryParams;
}
export declare class PostRealmUserStorageIdSyncResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    synchronizationResult?: shared.SynchronizationResult;
}
