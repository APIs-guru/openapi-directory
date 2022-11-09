import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetModalitiesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=expand" })
  expand?: string;
}


export class GetModalitiesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetModalitiesQueryParams;
}


export class GetModalitiesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getModalities200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
