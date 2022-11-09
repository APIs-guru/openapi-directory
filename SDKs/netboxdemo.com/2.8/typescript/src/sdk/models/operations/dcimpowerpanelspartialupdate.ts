import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimPowerPanelsPartialUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimPowerPanelsPartialUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimPowerPanelsPartialUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritablePowerPanel;
}


export class DcimPowerPanelsPartialUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  powerPanel?: shared.PowerPanel;

  @Metadata()
  statusCode: number;
}
