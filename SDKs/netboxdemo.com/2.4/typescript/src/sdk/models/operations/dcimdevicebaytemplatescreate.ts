import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimDeviceBayTemplatesCreateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.WritableDeviceBayTemplateInput;
}


export class DcimDeviceBayTemplatesCreateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deviceBayTemplate?: shared.DeviceBayTemplate;

  @SpeakeasyMetadata()
  statusCode: number;
}
