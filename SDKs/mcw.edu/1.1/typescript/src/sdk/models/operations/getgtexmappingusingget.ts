import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetGtexMappingUsingGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=rgdId" })
  rgdId: number;
}


export class GetGtexMappingUsingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGtexMappingUsingGetPathParams;
}


export class GetGtexMappingUsingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
