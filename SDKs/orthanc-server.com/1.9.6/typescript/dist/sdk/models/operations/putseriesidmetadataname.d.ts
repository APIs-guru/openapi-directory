import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PutSeriesIdMetadataNamePathParams extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class PutSeriesIdMetadataNameHeaders extends SpeakeasyBase {
    ifMatch?: string;
}
export declare class PutSeriesIdMetadataNameRequest extends SpeakeasyBase {
    pathParams: PutSeriesIdMetadataNamePathParams;
    headers: PutSeriesIdMetadataNameHeaders;
    request?: Uint8Array;
}
export declare class PutSeriesIdMetadataNameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
