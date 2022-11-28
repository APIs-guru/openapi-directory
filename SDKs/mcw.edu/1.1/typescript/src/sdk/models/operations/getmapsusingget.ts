import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMapsUsingGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=speciesTypeKey" })
  speciesTypeKey: number;
}


export class GetMapsUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMapsUsingGetPathParams;
}


export class GetMapsUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
