import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetActionPackageActivityListHtmlQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetActionPackageActivityListHtmlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetActionPackageActivityListHtmlQueryParams;
}


export class GetActionPackageActivityListHtmlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
