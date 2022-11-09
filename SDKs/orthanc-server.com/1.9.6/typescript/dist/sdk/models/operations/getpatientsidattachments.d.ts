import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetPatientsIdAttachmentsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetPatientsIdAttachmentsRequest extends SpeakeasyBase {
    pathParams: GetPatientsIdAttachmentsPathParams;
}
export declare class GetPatientsIdAttachmentsResponse extends SpeakeasyBase {
    contentType: string;
    getPatientsIdAttachments200ApplicationJsonAny?: any;
    statusCode: number;
}
