import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetActionPackageActivityListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetActionPackageActivityListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetActionPackageActivityListQueryParams;
}


export class GetActionPackageActivityListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
