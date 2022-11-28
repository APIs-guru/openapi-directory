import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSetupV1ServicesIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetSetupV1ServicesIdRequest extends SpeakeasyBase {
    pathParams: GetSetupV1ServicesIdPathParams;
}
export declare class GetSetupV1ServicesIdResponse extends SpeakeasyBase {
    contentType: string;
    serviceViewModel?: shared.ServiceViewModel;
    statusCode: number;
}
