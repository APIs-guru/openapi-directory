import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteSetupV1ResourcesIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteSetupV1ResourcesIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteSetupV1ResourcesIdPathParams;
}


export class DeleteSetupV1ResourcesIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  resourceViewModel?: shared.ResourceViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
