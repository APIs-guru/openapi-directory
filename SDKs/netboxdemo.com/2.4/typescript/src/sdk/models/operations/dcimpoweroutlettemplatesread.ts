import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimPowerOutletTemplatesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimPowerOutletTemplatesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimPowerOutletTemplatesReadPathParams;
}


export class DcimPowerOutletTemplatesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  powerOutletTemplate?: shared.PowerOutletTemplate;

  @SpeakeasyMetadata()
  statusCode: number;
}
