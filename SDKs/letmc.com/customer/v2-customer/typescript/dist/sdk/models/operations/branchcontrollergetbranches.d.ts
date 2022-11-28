import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class BranchControllerGetBranchesPathParams extends SpeakeasyBase {
    shortName: string;
}
export declare class BranchControllerGetBranchesQueryParams extends SpeakeasyBase {
    count: number;
    offset: number;
}
export declare class BranchControllerGetBranchesRequest extends SpeakeasyBase {
    pathParams: BranchControllerGetBranchesPathParams;
    queryParams: BranchControllerGetBranchesQueryParams;
}
export declare class BranchControllerGetBranchesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    branchModelResults?: shared.BranchModelResults;
    contentType: string;
    statusCode: number;
}
