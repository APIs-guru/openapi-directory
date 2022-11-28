import { SpeakeasyBase } from "../../../internal/utils";
export declare class HeadPersonalCurrentAccountsHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
    ifNoneMatch?: string;
}
export declare class HeadPersonalCurrentAccountsRequest extends SpeakeasyBase {
    headers: HeadPersonalCurrentAccountsHeaders;
}
export declare class HeadPersonalCurrentAccountsResponse extends SpeakeasyBase {
    contentType: string;
    noResponse?: Map<string, any>;
    statusCode: number;
}
