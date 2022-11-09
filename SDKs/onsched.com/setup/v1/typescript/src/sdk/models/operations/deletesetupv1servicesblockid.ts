import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteSetupV1ServicesBlockIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteSetupV1ServicesBlockIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteSetupV1ServicesBlockIdPathParams;
}


export class DeleteSetupV1ServicesBlockIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  resourceBlockViewModel?: shared.ResourceBlockViewModel;

  @Metadata()
  statusCode: number;
}
