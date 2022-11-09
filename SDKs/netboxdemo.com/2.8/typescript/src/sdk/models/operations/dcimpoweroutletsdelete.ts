import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DcimPowerOutletsDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimPowerOutletsDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DcimPowerOutletsDeletePathParams;
}


export class DcimPowerOutletsDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
