import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPatientsIdAttachmentsNameMd5PathParams extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class GetPatientsIdAttachmentsNameMd5Headers extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetPatientsIdAttachmentsNameMd5Request extends SpeakeasyBase {
    pathParams: GetPatientsIdAttachmentsNameMd5PathParams;
    headers: GetPatientsIdAttachmentsNameMd5Headers;
}
export declare class GetPatientsIdAttachmentsNameMd5Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
