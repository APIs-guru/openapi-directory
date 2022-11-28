import { SpeakeasyBase } from "../../../internal/utils";
export declare class HeadBusinessCurrentAccountsHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
    ifNoneMatch?: string;
}
export declare class HeadBusinessCurrentAccountsRequest extends SpeakeasyBase {
    headers: HeadBusinessCurrentAccountsHeaders;
}
export declare class HeadBusinessCurrentAccountsResponse extends SpeakeasyBase {
    contentType: string;
    noResponse?: Map<string, any>;
    statusCode: number;
}
