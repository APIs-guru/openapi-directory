import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetDripQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=code" })
  code?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=delay" })
  delay?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=duration" })
  duration?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=numbytes" })
  numbytes?: number;
}


export class GetDripRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetDripQueryParams;
}


export class GetDripResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
