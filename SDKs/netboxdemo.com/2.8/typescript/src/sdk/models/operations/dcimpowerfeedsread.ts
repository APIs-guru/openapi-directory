import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimPowerFeedsReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimPowerFeedsReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimPowerFeedsReadPathParams;
}


export class DcimPowerFeedsReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  powerFeed?: shared.PowerFeed;

  @SpeakeasyMetadata()
  statusCode: number;
}
