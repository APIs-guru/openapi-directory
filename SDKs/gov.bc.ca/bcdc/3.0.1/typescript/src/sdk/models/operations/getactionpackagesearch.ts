import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetActionPackageSearchQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;
}


export class GetActionPackageSearchRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetActionPackageSearchQueryParams;
}


export class GetActionPackageSearchResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
