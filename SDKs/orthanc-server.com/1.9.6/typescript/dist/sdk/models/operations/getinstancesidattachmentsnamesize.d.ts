import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetInstancesIdAttachmentsNameSizePathParams extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class GetInstancesIdAttachmentsNameSizeHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetInstancesIdAttachmentsNameSizeRequest extends SpeakeasyBase {
    pathParams: GetInstancesIdAttachmentsNameSizePathParams;
    headers: GetInstancesIdAttachmentsNameSizeHeaders;
}
export declare class GetInstancesIdAttachmentsNameSizeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
