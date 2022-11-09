import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetActionTagListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetActionTagListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetActionTagListQueryParams;
}


export class GetActionTagListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
