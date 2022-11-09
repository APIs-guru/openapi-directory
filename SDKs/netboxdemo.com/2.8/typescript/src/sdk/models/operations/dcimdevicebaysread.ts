import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimDeviceBaysReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimDeviceBaysReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimDeviceBaysReadPathParams;
}


export class DcimDeviceBaysReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deviceBay?: shared.DeviceBay;

  @Metadata()
  statusCode: number;
}
