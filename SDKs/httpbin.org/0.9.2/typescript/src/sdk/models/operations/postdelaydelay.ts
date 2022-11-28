import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PostDelayDelayPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=delay" })
  delay: number;
}


export class PostDelayDelayRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostDelayDelayPathParams;
}


export class PostDelayDelayResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
