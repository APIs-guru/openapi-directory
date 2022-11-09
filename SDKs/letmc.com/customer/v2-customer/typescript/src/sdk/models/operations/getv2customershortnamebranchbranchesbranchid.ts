import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV2CustomerShortNameBranchBranchesBranchIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=branchID" })
  branchId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=shortName" })
  shortName: string;
}


export class GetV2CustomerShortNameBranchBranchesBranchIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetV2CustomerShortNameBranchBranchesBranchIdPathParams;
}


export class GetV2CustomerShortNameBranchBranchesBranchIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  branchModel?: shared.BranchModel;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
