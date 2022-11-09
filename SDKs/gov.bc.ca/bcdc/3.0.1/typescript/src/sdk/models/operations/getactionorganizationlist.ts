import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetActionOrganizationListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetActionOrganizationListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetActionOrganizationListQueryParams;
}


export class GetActionOrganizationListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
