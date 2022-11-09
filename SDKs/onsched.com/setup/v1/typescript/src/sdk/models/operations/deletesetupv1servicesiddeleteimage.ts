import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteSetupV1ServicesIdDeleteimagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteSetupV1ServicesIdDeleteimageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteSetupV1ServicesIdDeleteimagePathParams;
}


export class DeleteSetupV1ServicesIdDeleteimageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceViewModel?: shared.ServiceViewModel;

  @Metadata()
  statusCode: number;
}
