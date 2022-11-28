import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DcimPowerPanelsDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class DcimPowerPanelsDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DcimPowerPanelsDeletePathParams;
}


export class DcimPowerPanelsDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
