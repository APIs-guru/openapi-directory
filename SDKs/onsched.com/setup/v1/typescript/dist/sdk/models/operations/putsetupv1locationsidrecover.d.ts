import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutSetupV1LocationsIdRecoverPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutSetupV1LocationsIdRecoverRequest extends SpeakeasyBase {
    pathParams: PutSetupV1LocationsIdRecoverPathParams;
}
export declare class PutSetupV1LocationsIdRecoverResponse extends SpeakeasyBase {
    contentType: string;
    locationViewModel?: shared.LocationViewModel;
    statusCode: number;
}
