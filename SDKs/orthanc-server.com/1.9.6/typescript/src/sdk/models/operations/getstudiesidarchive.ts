import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetStudiesIdArchivePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetStudiesIdArchiveQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=transcode" })
  transcode?: string;
}


export class GetStudiesIdArchiveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetStudiesIdArchivePathParams;

  @Metadata()
  queryParams: GetStudiesIdArchiveQueryParams;
}


export class GetStudiesIdArchiveResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
