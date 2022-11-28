import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostSetupV1ServicesCalendarRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  serviceCalendarInputModel?: shared.ServiceCalendarInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  serviceCalendarInputModel1?: shared.ServiceCalendarInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  serviceCalendarInputModel2?: shared.ServiceCalendarInputModel;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  serviceCalendarInputModel3?: shared.ServiceCalendarInputModel;
}


export class PostSetupV1ServicesCalendarRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: PostSetupV1ServicesCalendarRequests;
}


export class PostSetupV1ServicesCalendarResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serviceCalendarViewModel?: shared.ServiceCalendarViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
