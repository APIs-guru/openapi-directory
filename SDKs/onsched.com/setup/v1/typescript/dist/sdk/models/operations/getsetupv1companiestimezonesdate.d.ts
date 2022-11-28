import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSetupV1CompaniesTimezonesDatePathParams extends SpeakeasyBase {
    date: Date;
}
export declare class GetSetupV1CompaniesTimezonesDateRequest extends SpeakeasyBase {
    pathParams: GetSetupV1CompaniesTimezonesDatePathParams;
}
export declare class GetSetupV1CompaniesTimezonesDateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    timezoneViewModel?: shared.TimezoneViewModel;
}
