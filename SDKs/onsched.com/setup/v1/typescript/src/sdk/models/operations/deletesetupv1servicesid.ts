import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteSetupV1ServicesIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteSetupV1ServicesIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteSetupV1ServicesIdPathParams;
}


export class DeleteSetupV1ServicesIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceViewModel?: shared.ServiceViewModel;

  @Metadata()
  statusCode: number;
}
