import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetQtlByRgdIdUsingGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=rgdId" })
  rgdId: number;
}


export class GetQtlByRgdIdUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetQtlByRgdIdUsingGetPathParams;
}


export class GetQtlByRgdIdUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
