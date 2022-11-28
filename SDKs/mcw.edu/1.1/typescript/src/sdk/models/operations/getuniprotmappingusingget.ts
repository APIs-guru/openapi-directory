import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetUniProtMappingUsingGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=rgdId" })
  rgdId: number;
}


export class GetUniProtMappingUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUniProtMappingUsingGetPathParams;
}


export class GetUniProtMappingUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
