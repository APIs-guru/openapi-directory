import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetTargetByEnsgidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=target" })
  target: string;
}


export class GetTargetByEnsgidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTargetByEnsgidPathParams;
}


export class GetTargetByEnsgidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
