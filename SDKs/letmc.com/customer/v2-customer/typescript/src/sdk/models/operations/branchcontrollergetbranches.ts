import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BranchControllerGetBranchesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=shortName" })
  shortName: string;
}


export class BranchControllerGetBranchesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=count" })
  count: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset: number;
}


export class BranchControllerGetBranchesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: BranchControllerGetBranchesPathParams;

  @Metadata()
  queryParams: BranchControllerGetBranchesQueryParams;
}


export class BranchControllerGetBranchesResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  branchModelResults?: shared.BranchModelResults;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
