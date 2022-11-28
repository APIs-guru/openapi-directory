import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutSetupV1ResourcesIdAvailabilityPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutSetupV1ResourcesIdAvailabilityRequests extends SpeakeasyBase {
    availabilityInputModel?: shared.AvailabilityInputModel;
    availabilityInputModel1?: shared.AvailabilityInputModel;
    availabilityInputModel2?: shared.AvailabilityInputModel;
    availabilityInputModel3?: shared.AvailabilityInputModel;
}
export declare class PutSetupV1ResourcesIdAvailabilityRequest extends SpeakeasyBase {
    pathParams: PutSetupV1ResourcesIdAvailabilityPathParams;
    request?: PutSetupV1ResourcesIdAvailabilityRequests;
}
export declare class PutSetupV1ResourcesIdAvailabilityResponse extends SpeakeasyBase {
    contentType: string;
    resourceAvailabilityViewModel?: shared.ResourceAvailabilityViewModel;
    statusCode: number;
}
