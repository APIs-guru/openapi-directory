import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteSetupV1ResourcesIdDeleteimagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteSetupV1ResourcesIdDeleteimageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteSetupV1ResourcesIdDeleteimagePathParams;
}


export class DeleteSetupV1ResourcesIdDeleteimageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  resourceViewModel?: shared.ResourceViewModel;

  @Metadata()
  statusCode: number;
}
