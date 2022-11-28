import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BranchControllerGetBranchesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=shortName" })
  shortName: string;
}


export class BranchControllerGetBranchesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=count" })
  count: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset: number;
}


export class BranchControllerGetBranchesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: BranchControllerGetBranchesPathParams;

  @SpeakeasyMetadata()
  queryParams: BranchControllerGetBranchesQueryParams;
}


export class BranchControllerGetBranchesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  branchModelResults?: shared.BranchModelResults;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
