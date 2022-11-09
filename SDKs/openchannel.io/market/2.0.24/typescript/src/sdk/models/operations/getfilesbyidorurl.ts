import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetFilesByIdOrUrlQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=fileIdOrUrl" })
  fileIdOrUrl: string;
}


export class GetFilesByIdOrUrlRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetFilesByIdOrUrlQueryParams;
}


export class GetFilesByIdOrUrlResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
