import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimDeviceBayTemplatesCreateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableDeviceBayTemplate;
}


export class DcimDeviceBayTemplatesCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deviceBayTemplate?: shared.DeviceBayTemplate;

  @Metadata()
  statusCode: number;
}
