import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPatientsIdAttachmentsNameDataPathParams extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class GetPatientsIdAttachmentsNameDataHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetPatientsIdAttachmentsNameDataRequest extends SpeakeasyBase {
    pathParams: GetPatientsIdAttachmentsNameDataPathParams;
    headers: GetPatientsIdAttachmentsNameDataHeaders;
}
export declare class GetPatientsIdAttachmentsNameDataResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
