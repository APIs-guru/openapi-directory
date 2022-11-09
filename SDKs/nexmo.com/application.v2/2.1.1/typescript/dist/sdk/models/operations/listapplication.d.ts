import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ListApplicationQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class ListApplicationRequest extends SpeakeasyBase {
    queryParams: ListApplicationQueryParams;
}
export declare class ListApplicationResponse extends SpeakeasyBase {
    applicationResponseCollection?: any;
    contentType: string;
    statusCode: number;
    listApplication400ApplicationJsonAny?: any;
    listApplication401ApplicationJsonAny?: any;
    listApplication405ApplicationJsonAny?: any;
    listApplication406ApplicationJsonAny?: any;
}
