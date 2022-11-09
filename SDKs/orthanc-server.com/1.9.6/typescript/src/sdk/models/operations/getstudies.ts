import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetStudiesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=expand" })
  expand?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=full" })
  full?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=short" })
  short?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=since" })
  since?: number;
}


export class GetStudiesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetStudiesQueryParams;
}


export class GetStudiesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getStudies200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
