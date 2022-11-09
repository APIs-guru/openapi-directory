import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetInstancesIdAttachmentsNamePathParams extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class GetInstancesIdAttachmentsNameHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetInstancesIdAttachmentsNameRequest extends SpeakeasyBase {
    pathParams: GetInstancesIdAttachmentsNamePathParams;
    headers: GetInstancesIdAttachmentsNameHeaders;
}
export declare class GetInstancesIdAttachmentsNameResponse extends SpeakeasyBase {
    contentType: string;
    getInstancesIdAttachmentsName200ApplicationJsonAny?: any;
    headers: Map<string, string[]>;
    statusCode: number;
}
