import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutSetupV1ServicesIdAvailabilityPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutSetupV1ServicesIdAvailabilityRequests extends SpeakeasyBase {
    availabilityInputModel?: shared.AvailabilityInputModel;
    availabilityInputModel1?: shared.AvailabilityInputModel;
    availabilityInputModel2?: shared.AvailabilityInputModel;
    availabilityInputModel3?: shared.AvailabilityInputModel;
}
export declare class PutSetupV1ServicesIdAvailabilityRequest extends SpeakeasyBase {
    pathParams: PutSetupV1ServicesIdAvailabilityPathParams;
    request?: PutSetupV1ServicesIdAvailabilityRequests;
}
export declare class PutSetupV1ServicesIdAvailabilityResponse extends SpeakeasyBase {
    contentType: string;
    serviceAvailabilityViewModel?: shared.ServiceAvailabilityViewModel;
    statusCode: number;
}
