import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetActionOrganizationFollowerListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;
}


export class GetActionOrganizationFollowerListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetActionOrganizationFollowerListQueryParams;
}


export class GetActionOrganizationFollowerListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
