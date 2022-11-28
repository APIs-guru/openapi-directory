import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteSetupV1LocationsIdDeleteimagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteSetupV1LocationsIdDeleteimageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteSetupV1LocationsIdDeleteimagePathParams;
}


export class DeleteSetupV1LocationsIdDeleteimageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  locationViewModel?: shared.LocationViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
