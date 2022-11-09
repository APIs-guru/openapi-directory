import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteSetupV1LocationsIdDeleteimagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteSetupV1LocationsIdDeleteimageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteSetupV1LocationsIdDeleteimagePathParams;
}


export class DeleteSetupV1LocationsIdDeleteimageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  locationViewModel?: shared.LocationViewModel;

  @Metadata()
  statusCode: number;
}
