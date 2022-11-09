import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetActionOrganizationListForUserQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=permission" })
  permission?: string;
}


export class GetActionOrganizationListForUserRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetActionOrganizationListForUserQueryParams;
}


export class GetActionOrganizationListForUserResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
