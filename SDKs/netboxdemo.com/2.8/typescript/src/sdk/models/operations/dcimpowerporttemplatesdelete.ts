import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DcimPowerPortTemplatesDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimPowerPortTemplatesDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimPowerPortTemplatesDeletePathParams;
}


export class DcimPowerPortTemplatesDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
