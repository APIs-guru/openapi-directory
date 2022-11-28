import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetGeneByRgdIdUsingGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=rgdId" })
  rgdId: number;
}


export class GetGeneByRgdIdUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGeneByRgdIdUsingGetPathParams;
}


export class GetGeneByRgdIdUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
