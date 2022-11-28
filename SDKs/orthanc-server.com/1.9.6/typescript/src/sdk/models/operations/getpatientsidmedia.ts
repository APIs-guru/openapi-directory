import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPatientsIdMediaPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetPatientsIdMediaQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=extended" })
  extended?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=transcode" })
  transcode?: string;
}


export class GetPatientsIdMediaRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPatientsIdMediaPathParams;

  @SpeakeasyMetadata()
  queryParams: GetPatientsIdMediaQueryParams;
}


export class GetPatientsIdMediaResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
