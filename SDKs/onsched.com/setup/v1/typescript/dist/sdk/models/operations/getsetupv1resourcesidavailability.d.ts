import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSetupV1ResourcesIdAvailabilityPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSetupV1ResourcesIdAvailabilityRequest extends SpeakeasyBase {
    pathParams: GetSetupV1ResourcesIdAvailabilityPathParams;
}
export declare class GetSetupV1ResourcesIdAvailabilityResponse extends SpeakeasyBase {
    contentType: string;
    resourceAvailabilityViewModel?: shared.ResourceAvailabilityViewModel;
    statusCode: number;
}
