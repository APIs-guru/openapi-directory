import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSetupV1ServicesIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteSetupV1ServicesIdRequest extends SpeakeasyBase {
    pathParams: DeleteSetupV1ServicesIdPathParams;
}
export declare class DeleteSetupV1ServicesIdResponse extends SpeakeasyBase {
    contentType: string;
    serviceViewModel?: shared.ServiceViewModel;
    statusCode: number;
}
