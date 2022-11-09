import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetQueryParams extends SpeakeasyBase {
    domain: string;
    format?: string;
    key: string;
}
export declare class GetRequest extends SpeakeasyBase {
    queryParams: GetQueryParams;
}
export declare class GetResponse extends SpeakeasyBase {
    contentType: string;
    get200TextHtmlString?: string;
    statusCode: number;
}
