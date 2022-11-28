import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetActionPackageListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetActionPackageListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetActionPackageListQueryParams;
}


export class GetActionPackageListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
