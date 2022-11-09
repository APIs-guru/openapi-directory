import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PutInstancesIdMetadataNamePathParams extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class PutInstancesIdMetadataNameHeaders extends SpeakeasyBase {
    ifMatch?: string;
}
export declare class PutInstancesIdMetadataNameRequest extends SpeakeasyBase {
    pathParams: PutInstancesIdMetadataNamePathParams;
    headers: PutInstancesIdMetadataNameHeaders;
    request?: Uint8Array;
}
export declare class PutInstancesIdMetadataNameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
