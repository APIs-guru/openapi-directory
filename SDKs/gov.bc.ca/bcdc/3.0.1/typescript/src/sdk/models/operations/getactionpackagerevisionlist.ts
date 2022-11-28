import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetActionPackageRevisionListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;
}


export class GetActionPackageRevisionListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetActionPackageRevisionListQueryParams;
}


export class GetActionPackageRevisionListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
