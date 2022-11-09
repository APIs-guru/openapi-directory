import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PutInstancesIdAttachmentsNamePathParams extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class PutInstancesIdAttachmentsNameHeaders extends SpeakeasyBase {
    ifMatch?: string;
}
export declare class PutInstancesIdAttachmentsNameRequest extends SpeakeasyBase {
    pathParams: PutInstancesIdAttachmentsNamePathParams;
    headers: PutInstancesIdAttachmentsNameHeaders;
    request?: Uint8Array;
}
export declare class PutInstancesIdAttachmentsNameResponse extends SpeakeasyBase {
    contentType: string;
    putInstancesIdAttachmentsName200ApplicationJsonAny?: any;
    statusCode: number;
}
