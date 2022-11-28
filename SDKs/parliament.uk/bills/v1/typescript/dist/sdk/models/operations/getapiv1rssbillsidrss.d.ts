import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetApiV1RssBillsIdRssPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetApiV1RssBillsIdRssRequest extends SpeakeasyBase {
    pathParams: GetApiV1RssBillsIdRssPathParams;
}
export declare class GetApiV1RssBillsIdRssResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
