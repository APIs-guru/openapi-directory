import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PostOwnershipOwnershipIdPathParams extends SpeakeasyBase {
    ownershipId: string;
}
export declare class PostOwnershipOwnershipIdQueryParams extends SpeakeasyBase {
    customData?: string;
    expires?: number;
}
export declare class PostOwnershipOwnershipIdRequest extends SpeakeasyBase {
    pathParams: PostOwnershipOwnershipIdPathParams;
    queryParams: PostOwnershipOwnershipIdQueryParams;
}
export declare class PostOwnershipOwnershipIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
