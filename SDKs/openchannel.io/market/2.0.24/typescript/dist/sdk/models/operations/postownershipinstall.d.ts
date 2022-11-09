import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PostOwnershipInstallQueryParams extends SpeakeasyBase {
    appId: string;
    customData?: string;
    model?: string;
    modelId?: string;
    userId: string;
}
export declare class PostOwnershipInstallRequest extends SpeakeasyBase {
    queryParams: PostOwnershipInstallQueryParams;
}
export declare class PostOwnershipInstallResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
