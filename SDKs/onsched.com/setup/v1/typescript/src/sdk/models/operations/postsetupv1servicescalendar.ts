import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostSetupV1ServicesCalendarRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  serviceCalendarInputModel?: shared.ServiceCalendarInputModel;

  @Metadata({ data: "request, media_type=application/json" })
  serviceCalendarInputModel1?: shared.ServiceCalendarInputModel;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  serviceCalendarInputModel2?: shared.ServiceCalendarInputModel;

  @Metadata({ data: "request, media_type=text/json" })
  serviceCalendarInputModel3?: shared.ServiceCalendarInputModel;
}


export class PostSetupV1ServicesCalendarRequest extends SpeakeasyBase {
  @Metadata()
  request?: PostSetupV1ServicesCalendarRequests;
}


export class PostSetupV1ServicesCalendarResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceCalendarViewModel?: shared.ServiceCalendarViewModel;

  @Metadata()
  statusCode: number;
}
