import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetActionOrganizationFollowerCountQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;
}


export class GetActionOrganizationFollowerCountRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetActionOrganizationFollowerCountQueryParams;
}


export class GetActionOrganizationFollowerCountResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
