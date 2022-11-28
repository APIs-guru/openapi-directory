import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMgiMappingUsingGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=rgdId" })
  rgdId: number;
}


export class GetMgiMappingUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMgiMappingUsingGetPathParams;
}


export class GetMgiMappingUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
