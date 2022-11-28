import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetModalitiesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=expand" })
  expand?: string;
}


export class GetModalitiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetModalitiesQueryParams;
}


export class GetModalitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getModalities200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
