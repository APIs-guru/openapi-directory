import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PatchOwnershipOwnershipIdPathParams extends SpeakeasyBase {
    ownershipId: string;
}
export declare class PatchOwnershipOwnershipIdQueryParams extends SpeakeasyBase {
    customData?: string;
    expires?: number;
}
export declare class PatchOwnershipOwnershipIdRequest extends SpeakeasyBase {
    pathParams: PatchOwnershipOwnershipIdPathParams;
    queryParams: PatchOwnershipOwnershipIdQueryParams;
}
export declare class PatchOwnershipOwnershipIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
