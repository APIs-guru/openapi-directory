import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteSetupV1ResourcesBlockIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteSetupV1ResourcesBlockIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteSetupV1ResourcesBlockIdPathParams;
}


export class DeleteSetupV1ResourcesBlockIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  resourceBlockViewModel?: shared.ResourceBlockViewModel;

  @Metadata()
  statusCode: number;
}
