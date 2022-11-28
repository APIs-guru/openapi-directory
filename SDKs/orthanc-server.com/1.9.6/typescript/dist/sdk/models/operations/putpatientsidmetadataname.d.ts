import { SpeakeasyBase } from "../../../internal/utils";
export declare class PutPatientsIdMetadataNamePathParams extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class PutPatientsIdMetadataNameHeaders extends SpeakeasyBase {
    ifMatch?: string;
}
export declare class PutPatientsIdMetadataNameRequest extends SpeakeasyBase {
    pathParams: PutPatientsIdMetadataNamePathParams;
    headers: PutPatientsIdMetadataNameHeaders;
    request?: Uint8Array;
}
export declare class PutPatientsIdMetadataNameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
