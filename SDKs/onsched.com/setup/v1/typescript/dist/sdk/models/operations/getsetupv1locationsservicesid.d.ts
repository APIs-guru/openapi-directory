import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSetupV1LocationsServicesIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSetupV1LocationsServicesIdRequest extends SpeakeasyBase {
    pathParams: GetSetupV1LocationsServicesIdPathParams;
}
export declare class GetSetupV1LocationsServicesIdResponse extends SpeakeasyBase {
    businessServiceViewModel?: shared.BusinessServiceViewModel;
    contentType: string;
    statusCode: number;
}
