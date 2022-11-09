import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimPowerFeedsUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimPowerFeedsUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimPowerFeedsUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritablePowerFeed;
}


export class DcimPowerFeedsUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  powerFeed?: shared.PowerFeed;

  @Metadata()
  statusCode: number;
}
