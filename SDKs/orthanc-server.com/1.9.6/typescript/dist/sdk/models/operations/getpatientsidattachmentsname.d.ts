import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPatientsIdAttachmentsNamePathParams extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class GetPatientsIdAttachmentsNameHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetPatientsIdAttachmentsNameRequest extends SpeakeasyBase {
    pathParams: GetPatientsIdAttachmentsNamePathParams;
    headers: GetPatientsIdAttachmentsNameHeaders;
}
export declare class GetPatientsIdAttachmentsNameResponse extends SpeakeasyBase {
    contentType: string;
    getPatientsIdAttachmentsName200ApplicationJsonAny?: any;
    headers: Map<string, string[]>;
    statusCode: number;
}
