import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimPowerFeedsUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimPowerFeedsUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimPowerFeedsUpdatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.WritablePowerFeedInput;
}


export class DcimPowerFeedsUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  powerFeed?: shared.PowerFeed;

  @SpeakeasyMetadata()
  statusCode: number;
}
