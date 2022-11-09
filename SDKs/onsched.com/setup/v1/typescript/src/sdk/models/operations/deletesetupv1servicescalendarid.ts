import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteSetupV1ServicesCalendarIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteSetupV1ServicesCalendarIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteSetupV1ServicesCalendarIdPathParams;
}


export class DeleteSetupV1ServicesCalendarIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceCalendarViewModel?: shared.ServiceCalendarViewModel;

  @Metadata()
  statusCode: number;
}
