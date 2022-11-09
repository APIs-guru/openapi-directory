import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetActionOrganizationFollowerCountQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;
}


export class GetActionOrganizationFollowerCountRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetActionOrganizationFollowerCountQueryParams;
}


export class GetActionOrganizationFollowerCountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
