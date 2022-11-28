import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRealmUserStorageParentIdMappersIdSyncPathParams extends SpeakeasyBase {
    id: string;
    parentId: string;
    realm: string;
}
export declare class PostRealmUserStorageParentIdMappersIdSyncQueryParams extends SpeakeasyBase {
    direction?: string;
}
export declare class PostRealmUserStorageParentIdMappersIdSyncRequest extends SpeakeasyBase {
    pathParams: PostRealmUserStorageParentIdMappersIdSyncPathParams;
    queryParams: PostRealmUserStorageParentIdMappersIdSyncQueryParams;
}
export declare class PostRealmUserStorageParentIdMappersIdSyncResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    synchronizationResult?: shared.SynchronizationResult;
}
