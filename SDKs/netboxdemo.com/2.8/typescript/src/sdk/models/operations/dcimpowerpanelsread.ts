import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimPowerPanelsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimPowerPanelsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimPowerPanelsReadPathParams;
}


export class DcimPowerPanelsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  powerPanel?: shared.PowerPanel;

  @SpeakeasyMetadata()
  statusCode: number;
}
