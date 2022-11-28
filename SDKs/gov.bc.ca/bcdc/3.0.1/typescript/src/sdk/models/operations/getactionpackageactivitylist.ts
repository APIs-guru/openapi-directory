import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetActionPackageActivityListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetActionPackageActivityListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetActionPackageActivityListQueryParams;
}


export class GetActionPackageActivityListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
