import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSetupV1ServicesIdCalendarPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSetupV1ServicesIdCalendarQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=locationId" })
  locationId?: string;
}


export class GetSetupV1ServicesIdCalendarRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSetupV1ServicesIdCalendarPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSetupV1ServicesIdCalendarQueryParams;
}


export class GetSetupV1ServicesIdCalendarResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serviceCalendarViewModel?: shared.ServiceCalendarViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
