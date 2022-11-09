import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimPowerPanelsUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimPowerPanelsUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimPowerPanelsUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritablePowerPanel;
}


export class DcimPowerPanelsUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  powerPanel?: shared.PowerPanel;

  @Metadata()
  statusCode: number;
}
