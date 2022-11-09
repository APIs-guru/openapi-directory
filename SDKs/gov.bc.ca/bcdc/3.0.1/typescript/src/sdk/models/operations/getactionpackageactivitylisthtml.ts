import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetActionPackageActivityListHtmlQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetActionPackageActivityListHtmlRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetActionPackageActivityListHtmlQueryParams;
}


export class GetActionPackageActivityListHtmlResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
