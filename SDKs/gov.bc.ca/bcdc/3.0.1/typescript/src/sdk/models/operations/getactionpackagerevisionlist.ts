import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetActionPackageRevisionListQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;
}


export class GetActionPackageRevisionListRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetActionPackageRevisionListQueryParams;
}


export class GetActionPackageRevisionListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
