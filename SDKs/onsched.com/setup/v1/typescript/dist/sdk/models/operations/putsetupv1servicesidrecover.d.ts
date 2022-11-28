import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutSetupV1ServicesIdRecoverPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutSetupV1ServicesIdRecoverRequest extends SpeakeasyBase {
    pathParams: PutSetupV1ServicesIdRecoverPathParams;
}
export declare class PutSetupV1ServicesIdRecoverResponse extends SpeakeasyBase {
    contentType: string;
    serviceViewModel?: shared.ServiceViewModel;
    statusCode: number;
}
