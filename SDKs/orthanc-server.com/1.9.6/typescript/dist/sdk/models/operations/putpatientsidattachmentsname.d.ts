import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PutPatientsIdAttachmentsNamePathParams extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class PutPatientsIdAttachmentsNameHeaders extends SpeakeasyBase {
    ifMatch?: string;
}
export declare class PutPatientsIdAttachmentsNameRequest extends SpeakeasyBase {
    pathParams: PutPatientsIdAttachmentsNamePathParams;
    headers: PutPatientsIdAttachmentsNameHeaders;
    request?: Uint8Array;
}
export declare class PutPatientsIdAttachmentsNameResponse extends SpeakeasyBase {
    contentType: string;
    putPatientsIdAttachmentsName200ApplicationJsonAny?: any;
    statusCode: number;
}
