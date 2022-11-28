import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetV2CustomerShortNameBranchBranchesBranchIdPathParams extends SpeakeasyBase {
    branchId: string;
    shortName: string;
}
export declare class GetV2CustomerShortNameBranchBranchesBranchIdRequest extends SpeakeasyBase {
    pathParams: GetV2CustomerShortNameBranchBranchesBranchIdPathParams;
}
export declare class GetV2CustomerShortNameBranchBranchesBranchIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    branchModel?: shared.BranchModel;
    contentType: string;
    statusCode: number;
}
