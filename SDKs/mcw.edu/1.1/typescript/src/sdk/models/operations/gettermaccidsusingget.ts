import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTermAccIdsUsingGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=rgdId" })
  rgdId: number;
}


export class GetTermAccIdsUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTermAccIdsUsingGetPathParams;
}


export class GetTermAccIdsUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
