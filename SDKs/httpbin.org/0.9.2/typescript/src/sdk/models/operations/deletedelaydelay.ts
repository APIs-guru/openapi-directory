import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteDelayDelayPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=delay" })
  delay: number;
}


export class DeleteDelayDelayRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteDelayDelayPathParams;
}


export class DeleteDelayDelayResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
