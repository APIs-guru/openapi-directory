import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimDeviceBaysUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimDeviceBaysUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimDeviceBaysUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableDeviceBay;
}


export class DcimDeviceBaysUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deviceBay?: shared.DeviceBay;

  @Metadata()
  statusCode: number;
}
