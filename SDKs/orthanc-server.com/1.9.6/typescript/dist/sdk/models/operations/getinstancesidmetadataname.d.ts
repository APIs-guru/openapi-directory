import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetInstancesIdMetadataNamePathParams extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class GetInstancesIdMetadataNameHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetInstancesIdMetadataNameRequest extends SpeakeasyBase {
    pathParams: GetInstancesIdMetadataNamePathParams;
    headers: GetInstancesIdMetadataNameHeaders;
}
export declare class GetInstancesIdMetadataNameResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
