import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class DeleteStudiesIdAttachmentsNamePathParams extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class DeleteStudiesIdAttachmentsNameHeaders extends SpeakeasyBase {
    ifMatch?: string;
}
export declare class DeleteStudiesIdAttachmentsNameRequest extends SpeakeasyBase {
    pathParams: DeleteStudiesIdAttachmentsNamePathParams;
    headers: DeleteStudiesIdAttachmentsNameHeaders;
}
export declare class DeleteStudiesIdAttachmentsNameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
