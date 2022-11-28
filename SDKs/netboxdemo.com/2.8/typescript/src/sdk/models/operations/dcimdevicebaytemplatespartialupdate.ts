import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimDeviceBayTemplatesPartialUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimDeviceBayTemplatesPartialUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimDeviceBayTemplatesPartialUpdatePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.WritableDeviceBayTemplateInput;
}


export class DcimDeviceBayTemplatesPartialUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deviceBayTemplate?: shared.DeviceBayTemplate;

  @SpeakeasyMetadata()
  statusCode: number;
}
