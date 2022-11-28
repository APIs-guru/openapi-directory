import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PutDelayDelayPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=delay" })
  delay: number;
}


export class PutDelayDelayRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutDelayDelayPathParams;
}


export class PutDelayDelayResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
