import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCacheValuePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=value" })
  value: number;
}


export class GetCacheValueRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCacheValuePathParams;
}


export class GetCacheValueResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
