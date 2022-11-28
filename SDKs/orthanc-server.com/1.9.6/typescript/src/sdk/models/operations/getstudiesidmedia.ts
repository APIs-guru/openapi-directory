import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetStudiesIdMediaPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetStudiesIdMediaQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=extended" })
  extended?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transcode" })
  transcode?: string;
}


export class GetStudiesIdMediaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetStudiesIdMediaPathParams;

  @SpeakeasyMetadata()
  queryParams: GetStudiesIdMediaQueryParams;
}


export class GetStudiesIdMediaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
