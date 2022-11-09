import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetActionPackageListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetActionPackageListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetActionPackageListQueryParams;
}


export class GetActionPackageListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
