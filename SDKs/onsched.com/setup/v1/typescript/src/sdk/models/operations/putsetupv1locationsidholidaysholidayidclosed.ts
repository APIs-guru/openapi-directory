import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutSetupV1LocationsIdHolidaysHolidayIdClosedPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=closed" })
  closed: boolean;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=holidayId" })
  holidayId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutSetupV1LocationsIdHolidaysHolidayIdClosedRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutSetupV1LocationsIdHolidaysHolidayIdClosedPathParams;
}


export class PutSetupV1LocationsIdHolidaysHolidayIdClosedResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  locationViewModel?: shared.LocationViewModel;

  @Metadata()
  statusCode: number;
}
