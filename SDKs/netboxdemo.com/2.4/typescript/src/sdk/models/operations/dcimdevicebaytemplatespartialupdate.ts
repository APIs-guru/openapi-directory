import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimDeviceBayTemplatesPartialUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimDeviceBayTemplatesPartialUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimDeviceBayTemplatesPartialUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritableDeviceBayTemplate;
}


export class DcimDeviceBayTemplatesPartialUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deviceBayTemplate?: shared.DeviceBayTemplate;

  @Metadata()
  statusCode: number;
}
