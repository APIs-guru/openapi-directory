import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimPowerFeedsReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimPowerFeedsReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimPowerFeedsReadPathParams;
}


export class DcimPowerFeedsReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  powerFeed?: shared.PowerFeed;

  @Metadata()
  statusCode: number;
}
