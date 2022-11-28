import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPatientsIdMetadataNamePathParams extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class GetPatientsIdMetadataNameHeaders extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetPatientsIdMetadataNameRequest extends SpeakeasyBase {
    pathParams: GetPatientsIdMetadataNamePathParams;
    headers: GetPatientsIdMetadataNameHeaders;
}
export declare class GetPatientsIdMetadataNameResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
