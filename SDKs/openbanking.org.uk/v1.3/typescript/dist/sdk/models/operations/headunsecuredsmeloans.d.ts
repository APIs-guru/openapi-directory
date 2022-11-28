import { SpeakeasyBase } from "../../../internal/utils";
export declare class HeadUnsecuredSmeLoansHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
    ifNoneMatch?: string;
}
export declare class HeadUnsecuredSmeLoansRequest extends SpeakeasyBase {
    headers: HeadUnsecuredSmeLoansHeaders;
}
export declare class HeadUnsecuredSmeLoansResponse extends SpeakeasyBase {
    contentType: string;
    noResponse?: Map<string, any>;
    statusCode: number;
}
