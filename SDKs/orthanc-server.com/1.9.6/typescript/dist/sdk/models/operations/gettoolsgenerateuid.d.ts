import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetToolsGenerateUidQueryParams extends SpeakeasyBase {
    level: string;
}
export declare class GetToolsGenerateUidRequest extends SpeakeasyBase {
    queryParams: GetToolsGenerateUidQueryParams;
}
export declare class GetToolsGenerateUidResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
