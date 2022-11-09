import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PostDelayDelayPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=delay" })
  delay: number;
}


export class PostDelayDelayRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostDelayDelayPathParams;
}


export class PostDelayDelayResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
