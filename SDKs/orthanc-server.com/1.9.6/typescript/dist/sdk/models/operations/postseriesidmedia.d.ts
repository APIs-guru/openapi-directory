import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class PostSeriesIdMediaPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PostSeriesIdMediaRequest extends SpeakeasyBase {
    pathParams: PostSeriesIdMediaPathParams;
    request?: any;
}
export declare class PostSeriesIdMediaResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    postSeriesIdMedia200ApplicationJsonAny?: any;
    statusCode: number;
}
