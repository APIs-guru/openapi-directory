import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetActionRelatedListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dataset" })
  dataset?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=featured" })
  featured?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type_filter" })
  typeFilter?: string;
}


export class GetActionRelatedListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetActionRelatedListQueryParams;
}


export class GetActionRelatedListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
