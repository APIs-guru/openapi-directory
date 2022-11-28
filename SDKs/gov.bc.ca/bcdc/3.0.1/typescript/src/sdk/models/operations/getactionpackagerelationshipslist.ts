import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetActionPackageRelationshipsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id2" })
  id2?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rel" })
  rel?: string;
}


export class GetActionPackageRelationshipsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetActionPackageRelationshipsListQueryParams;
}


export class GetActionPackageRelationshipsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
