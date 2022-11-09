import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetActionOrganizationRevisionListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;
}


export class GetActionOrganizationRevisionListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetActionOrganizationRevisionListQueryParams;
}


export class GetActionOrganizationRevisionListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
