import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutSetupV1LocationsIdHolidaysHolidayIdClosedPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=closed" })
  closed: boolean;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=holidayId" })
  holidayId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutSetupV1LocationsIdHolidaysHolidayIdClosedRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutSetupV1LocationsIdHolidaysHolidayIdClosedPathParams;
}


export class PutSetupV1LocationsIdHolidaysHolidayIdClosedResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  locationViewModel?: shared.LocationViewModel;

  @SpeakeasyMetadata()
  statusCode: number;
}
