import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetStatsTotalQueryParams extends SpeakeasyBase {
    end?: number;
    fields: string;
    query?: string;
    start?: number;
}
export declare class GetStatsTotalRequest extends SpeakeasyBase {
    queryParams: GetStatsTotalQueryParams;
}
export declare class GetStatsTotalResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
