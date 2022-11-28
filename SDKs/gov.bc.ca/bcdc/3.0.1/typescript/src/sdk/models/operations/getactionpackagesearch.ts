import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetActionPackageSearchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" })
  q?: string;
}


export class GetActionPackageSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetActionPackageSearchQueryParams;
}


export class GetActionPackageSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
