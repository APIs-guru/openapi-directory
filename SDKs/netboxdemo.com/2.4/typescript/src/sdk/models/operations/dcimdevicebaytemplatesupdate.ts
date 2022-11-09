import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimDeviceBayTemplatesUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimDeviceBayTemplatesUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimDeviceBayTemplatesUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableDeviceBayTemplate;
}


export class DcimDeviceBayTemplatesUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deviceBayTemplate?: shared.DeviceBayTemplate;

  @Metadata()
  statusCode: number;
}
