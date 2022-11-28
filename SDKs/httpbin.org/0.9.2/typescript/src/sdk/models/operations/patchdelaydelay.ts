import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PatchDelayDelayPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=delay" })
  delay: number;
}


export class PatchDelayDelayRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchDelayDelayPathParams;
}


export class PatchDelayDelayResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
