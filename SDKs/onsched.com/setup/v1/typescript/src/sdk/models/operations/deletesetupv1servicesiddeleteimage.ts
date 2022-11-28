import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteSetupV1ServicesIdDeleteimagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteSetupV1ServicesIdDeleteimageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteSetupV1ServicesIdDeleteimagePathParams;
}


export class DeleteSetupV1ServicesIdDeleteimageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serviceViewModel?: shared.ServiceViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
