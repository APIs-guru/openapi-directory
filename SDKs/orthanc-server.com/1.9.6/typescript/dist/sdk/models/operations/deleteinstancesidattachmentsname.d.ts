import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteInstancesIdAttachmentsNamePathParams extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class DeleteInstancesIdAttachmentsNameHeaders extends SpeakeasyBase {
    ifMatch?: string;
}
export declare class DeleteInstancesIdAttachmentsNameRequest extends SpeakeasyBase {
    pathParams: DeleteInstancesIdAttachmentsNamePathParams;
    headers: DeleteInstancesIdAttachmentsNameHeaders;
}
export declare class DeleteInstancesIdAttachmentsNameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
