import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MergeVersionsQueryParams extends SpeakeasyBase {
    ids: string[];
}
export declare class MergeVersionsSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class MergeVersionsRequest extends SpeakeasyBase {
    queryParams: MergeVersionsQueryParams;
    security: MergeVersionsSecurity;
}
export declare class MergeVersionsResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
