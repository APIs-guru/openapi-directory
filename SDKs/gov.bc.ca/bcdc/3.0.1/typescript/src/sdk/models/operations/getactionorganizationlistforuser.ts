import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetActionOrganizationListForUserQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=permission" })
  permission?: string;
}


export class GetActionOrganizationListForUserRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetActionOrganizationListForUserQueryParams;
}


export class GetActionOrganizationListForUserResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
