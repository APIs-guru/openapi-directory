import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSetupV1ServicesCalendarRequests extends SpeakeasyBase {
    serviceCalendarInputModel?: shared.ServiceCalendarInputModel;
    serviceCalendarInputModel1?: shared.ServiceCalendarInputModel;
    serviceCalendarInputModel2?: shared.ServiceCalendarInputModel;
    serviceCalendarInputModel3?: shared.ServiceCalendarInputModel;
}
export declare class PostSetupV1ServicesCalendarRequest extends SpeakeasyBase {
    request?: PostSetupV1ServicesCalendarRequests;
}
export declare class PostSetupV1ServicesCalendarResponse extends SpeakeasyBase {
    contentType: string;
    serviceCalendarViewModel?: shared.ServiceCalendarViewModel;
    statusCode: number;
}
