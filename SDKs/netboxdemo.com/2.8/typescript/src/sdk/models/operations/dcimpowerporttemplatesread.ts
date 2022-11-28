import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DcimPowerPortTemplatesReadPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimPowerPortTemplatesReadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimPowerPortTemplatesReadPathParams;
}


export class DcimPowerPortTemplatesReadResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  powerPortTemplate?: shared.PowerPortTemplate;

  @SpeakeasyMetadata()
  statusCode: number;
}
