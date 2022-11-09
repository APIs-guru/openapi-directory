import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetActionOrganizationActivityListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;
}


export class GetActionOrganizationActivityListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetActionOrganizationActivityListQueryParams;
}


export class GetActionOrganizationActivityListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
