import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimDeviceBayTemplatesReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimDeviceBayTemplatesReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimDeviceBayTemplatesReadPathParams;
}


export class DcimDeviceBayTemplatesReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  deviceBayTemplate?: shared.DeviceBayTemplate;

  @Metadata()
  statusCode: number;
}
