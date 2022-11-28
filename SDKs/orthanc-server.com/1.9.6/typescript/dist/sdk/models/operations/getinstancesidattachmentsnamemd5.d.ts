import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetInstancesIdAttachmentsNameMd5PathParams extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class GetInstancesIdAttachmentsNameMd5Headers extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetInstancesIdAttachmentsNameMd5Request extends SpeakeasyBase {
    pathParams: GetInstancesIdAttachmentsNameMd5PathParams;
    headers: GetInstancesIdAttachmentsNameMd5Headers;
}
export declare class GetInstancesIdAttachmentsNameMd5Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
