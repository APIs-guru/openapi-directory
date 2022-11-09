import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DcimPowerPortsDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimPowerPortsDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimPowerPortsDeletePathParams;
}


export class DcimPowerPortsDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
