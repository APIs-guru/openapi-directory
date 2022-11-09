import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimPowerOutletTemplatesReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimPowerOutletTemplatesReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimPowerOutletTemplatesReadPathParams;
}


export class DcimPowerOutletTemplatesReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  powerOutletTemplate?: shared.PowerOutletTemplate;

  @Metadata()
  statusCode: number;
}
