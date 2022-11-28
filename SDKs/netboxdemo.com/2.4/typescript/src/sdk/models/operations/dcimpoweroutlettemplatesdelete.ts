import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DcimPowerOutletTemplatesDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimPowerOutletTemplatesDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimPowerOutletTemplatesDeletePathParams;
}


export class DcimPowerOutletTemplatesDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
