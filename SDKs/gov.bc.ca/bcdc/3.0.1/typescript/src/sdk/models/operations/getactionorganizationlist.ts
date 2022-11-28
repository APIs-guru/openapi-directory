import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetActionOrganizationListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetActionOrganizationListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetActionOrganizationListQueryParams;
}


export class GetActionOrganizationListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
