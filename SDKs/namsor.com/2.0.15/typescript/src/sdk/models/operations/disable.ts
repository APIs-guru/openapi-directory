import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DisablePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=disabled" })
  disabled: boolean;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=source" })
  source: string;
}


export class DisableRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DisablePathParams;
}


export class DisableResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
