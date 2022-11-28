import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetSeriesIdAttachmentsNameMd5PathParams extends SpeakeasyBase {
    id: string;
    name: string;
}
export declare class GetSeriesIdAttachmentsNameMd5Headers extends SpeakeasyBase {
    ifNoneMatch?: string;
}
export declare class GetSeriesIdAttachmentsNameMd5Request extends SpeakeasyBase {
    pathParams: GetSeriesIdAttachmentsNameMd5PathParams;
    headers: GetSeriesIdAttachmentsNameMd5Headers;
}
export declare class GetSeriesIdAttachmentsNameMd5Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
