import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimPowerFeedsPartialUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimPowerFeedsPartialUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimPowerFeedsPartialUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritablePowerFeed;
}


export class DcimPowerFeedsPartialUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  powerFeed?: shared.PowerFeed;

  @Metadata()
  statusCode: number;
}
