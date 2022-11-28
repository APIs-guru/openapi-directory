import { SpeakeasyBase } from "../../../internal/utils";
export declare class PostSeriesIdModifyPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PostSeriesIdModifyRequest extends SpeakeasyBase {
    pathParams: PostSeriesIdModifyPathParams;
    request?: any;
}
export declare class PostSeriesIdModifyResponse extends SpeakeasyBase {
    contentType: string;
    postSeriesIdModify200ApplicationJsonAny?: any;
    statusCode: number;
}
