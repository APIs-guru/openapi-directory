import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDelayDelayPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=delay" })
  delay: number;
}


export class GetDelayDelayRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetDelayDelayPathParams;
}


export class GetDelayDelayResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
