import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimDeviceBayTemplatesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimDeviceBayTemplatesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimDeviceBayTemplatesReadPathParams;
}


export class DcimDeviceBayTemplatesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  deviceBayTemplate?: shared.DeviceBayTemplate;

  @SpeakeasyMetadata()
  statusCode: number;
}
