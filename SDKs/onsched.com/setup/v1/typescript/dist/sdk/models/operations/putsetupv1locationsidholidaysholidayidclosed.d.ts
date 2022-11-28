import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutSetupV1LocationsIdHolidaysHolidayIdClosedPathParams extends SpeakeasyBase {
    closed: boolean;
    holidayId: string;
    id: string;
}
export declare class PutSetupV1LocationsIdHolidaysHolidayIdClosedRequest extends SpeakeasyBase {
    pathParams: PutSetupV1LocationsIdHolidaysHolidayIdClosedPathParams;
}
export declare class PutSetupV1LocationsIdHolidaysHolidayIdClosedResponse extends SpeakeasyBase {
    contentType: string;
    locationViewModel?: shared.LocationViewModel;
    statusCode: number;
}
