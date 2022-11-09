import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetSetupV1ServicesIdCalendarPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSetupV1ServicesIdCalendarQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=locationId" })
  locationId?: string;
}


export class GetSetupV1ServicesIdCalendarRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSetupV1ServicesIdCalendarPathParams;

  @Metadata()
  queryParams: GetSetupV1ServicesIdCalendarQueryParams;
}


export class GetSetupV1ServicesIdCalendarResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceCalendarViewModel?: shared.ServiceCalendarViewModel;

  @Metadata()
  statusCode: number;
}
