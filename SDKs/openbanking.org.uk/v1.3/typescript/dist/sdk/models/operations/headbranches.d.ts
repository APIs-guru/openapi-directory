import { SpeakeasyBase } from "../../../internal/utils";
export declare class HeadBranchesHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
    ifNoneMatch?: string;
}
export declare class HeadBranchesRequest extends SpeakeasyBase {
    headers: HeadBranchesHeaders;
}
export declare class HeadBranchesResponse extends SpeakeasyBase {
    contentType: string;
    noResponse?: Map<string, any>;
    statusCode: number;
}
