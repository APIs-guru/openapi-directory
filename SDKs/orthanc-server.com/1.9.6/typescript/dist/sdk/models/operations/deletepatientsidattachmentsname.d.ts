import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeletePatientsIdAttachmentsNamePathParams extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class DeletePatientsIdAttachmentsNameHeaders extends SpeakeasyBase {
    ifMatch?: string;
}
export declare class DeletePatientsIdAttachmentsNameRequest extends SpeakeasyBase {
    pathParams: DeletePatientsIdAttachmentsNamePathParams;
    headers: DeletePatientsIdAttachmentsNameHeaders;
}
export declare class DeletePatientsIdAttachmentsNameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
