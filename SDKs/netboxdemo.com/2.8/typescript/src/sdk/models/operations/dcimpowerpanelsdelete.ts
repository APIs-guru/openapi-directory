import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DcimPowerPanelsDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimPowerPanelsDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimPowerPanelsDeletePathParams;
}


export class DcimPowerPanelsDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
