import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCacheValuePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=value" })
  value: number;
}


export class GetCacheValueRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCacheValuePathParams;
}


export class GetCacheValueResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
