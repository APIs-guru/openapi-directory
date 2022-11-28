import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetV2CustomerShortNameBranchBranchesBranchIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=branchID" })
  branchId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shortName" })
  shortName: string;
}


export class GetV2CustomerShortNameBranchBranchesBranchIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetV2CustomerShortNameBranchBranchesBranchIdPathParams;
}


export class GetV2CustomerShortNameBranchBranchesBranchIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  branchModel?: shared.BranchModel;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
