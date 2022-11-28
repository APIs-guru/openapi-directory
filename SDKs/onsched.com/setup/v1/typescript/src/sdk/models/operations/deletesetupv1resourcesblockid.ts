import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteSetupV1ResourcesBlockIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteSetupV1ResourcesBlockIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteSetupV1ResourcesBlockIdPathParams;
}


export class DeleteSetupV1ResourcesBlockIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  resourceBlockViewModel?: shared.ResourceBlockViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
