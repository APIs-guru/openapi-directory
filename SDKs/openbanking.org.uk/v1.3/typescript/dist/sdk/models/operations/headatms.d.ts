import { SpeakeasyBase } from "../../../internal/utils";
export declare class HeadAtmsHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
    ifNoneMatch?: string;
}
export declare class HeadAtmsRequest extends SpeakeasyBase {
    headers: HeadAtmsHeaders;
}
export declare class HeadAtmsResponse extends SpeakeasyBase {
    contentType: string;
    noResponse?: Map<string, any>;
    statusCode: number;
}
