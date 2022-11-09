import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimPowerPanelsReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimPowerPanelsReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimPowerPanelsReadPathParams;
}


export class DcimPowerPanelsReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  powerPanel?: shared.PowerPanel;

  @Metadata()
  statusCode: number;
}
