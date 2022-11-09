import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DcimPowerPortTemplatesReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimPowerPortTemplatesReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimPowerPortTemplatesReadPathParams;
}


export class DcimPowerPortTemplatesReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  powerPortTemplate?: shared.PowerPortTemplate;

  @Metadata()
  statusCode: number;
}
