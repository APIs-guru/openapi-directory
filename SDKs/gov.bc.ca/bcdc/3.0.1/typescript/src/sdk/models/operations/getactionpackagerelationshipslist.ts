import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetActionPackageRelationshipsListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=id2" })
  id2?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=rel" })
  rel?: string;
}


export class GetActionPackageRelationshipsListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetActionPackageRelationshipsListQueryParams;
}


export class GetActionPackageRelationshipsListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
