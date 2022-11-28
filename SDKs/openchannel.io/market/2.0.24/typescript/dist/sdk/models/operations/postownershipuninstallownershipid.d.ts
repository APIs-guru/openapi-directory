import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostOwnershipUninstallOwnershipIdPathParams extends SpeakeasyBase {
    ownershipId: string;
}
export declare class PostOwnershipUninstallOwnershipIdQueryParams extends SpeakeasyBase {
    cancelOwnership?: boolean;
    customData?: string;
    userId: string;
}
export declare class PostOwnershipUninstallOwnershipIdRequest extends SpeakeasyBase {
    pathParams: PostOwnershipUninstallOwnershipIdPathParams;
    queryParams: PostOwnershipUninstallOwnershipIdQueryParams;
}
export declare class PostOwnershipUninstallOwnershipIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
