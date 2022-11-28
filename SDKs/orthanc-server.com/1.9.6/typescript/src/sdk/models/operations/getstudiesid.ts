import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetStudiesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetStudiesIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=full" })
  full?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=short" })
  short?: boolean;
}


export class GetStudiesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetStudiesIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetStudiesIdQueryParams;
}


export class GetStudiesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getStudiesId200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
