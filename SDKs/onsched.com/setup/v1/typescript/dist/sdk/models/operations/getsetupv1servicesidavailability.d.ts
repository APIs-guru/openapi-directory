import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSetupV1ServicesIdAvailabilityPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSetupV1ServicesIdAvailabilityRequest extends SpeakeasyBase {
    pathParams: GetSetupV1ServicesIdAvailabilityPathParams;
}
export declare class GetSetupV1ServicesIdAvailabilityResponse extends SpeakeasyBase {
    contentType: string;
    serviceAvailabilityViewModel?: shared.ServiceAvailabilityViewModel;
    statusCode: number;
}
