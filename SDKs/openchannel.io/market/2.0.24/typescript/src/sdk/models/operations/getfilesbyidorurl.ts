import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetFilesByIdOrUrlQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fileIdOrUrl" })
  fileIdOrUrl: string;
}


export class GetFilesByIdOrUrlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetFilesByIdOrUrlQueryParams;
}


export class GetFilesByIdOrUrlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
