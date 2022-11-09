import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DcimPowerOutletTemplatesDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimPowerOutletTemplatesDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimPowerOutletTemplatesDeletePathParams;
}


export class DcimPowerOutletTemplatesDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
