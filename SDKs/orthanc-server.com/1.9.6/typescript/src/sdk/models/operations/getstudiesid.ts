import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetStudiesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetStudiesIdQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=full" })
  full?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=short" })
  short?: boolean;
}


export class GetStudiesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetStudiesIdPathParams;

  @Metadata()
  queryParams: GetStudiesIdQueryParams;
}


export class GetStudiesIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getStudiesId200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
