import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DcimPowerPortTemplatesDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimPowerPortTemplatesDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimPowerPortTemplatesDeletePathParams;
}


export class DcimPowerPortTemplatesDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
