import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetInstancesIdAttachmentsNameDataPathParams extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class GetInstancesIdAttachmentsNameDataHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetInstancesIdAttachmentsNameDataRequest extends SpeakeasyBase {
    pathParams: GetInstancesIdAttachmentsNameDataPathParams;
    headers: GetInstancesIdAttachmentsNameDataHeaders;
}
export declare class GetInstancesIdAttachmentsNameDataResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
