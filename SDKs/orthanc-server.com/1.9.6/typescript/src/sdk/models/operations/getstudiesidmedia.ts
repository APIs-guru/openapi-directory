import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetStudiesIdMediaPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetStudiesIdMediaQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=extended" })
  extended?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=transcode" })
  transcode?: string;
}


export class GetStudiesIdMediaRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetStudiesIdMediaPathParams;

  @Metadata()
  queryParams: GetStudiesIdMediaQueryParams;
}


export class GetStudiesIdMediaResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
