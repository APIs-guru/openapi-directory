import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAddWordQueryParams extends SpeakeasyBase {
    author?: string;
    definition?: string;
    related?: string;
    word?: string;
}
export declare class GetAddWordRequest extends SpeakeasyBase {
    queryParams: GetAddWordQueryParams;
}
export declare class GetAddWordResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
