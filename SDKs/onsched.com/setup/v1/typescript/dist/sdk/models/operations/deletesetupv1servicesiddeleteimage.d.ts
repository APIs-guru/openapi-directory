import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSetupV1ServicesIdDeleteimagePathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteSetupV1ServicesIdDeleteimageRequest extends SpeakeasyBase {
    pathParams: DeleteSetupV1ServicesIdDeleteimagePathParams;
}
export declare class DeleteSetupV1ServicesIdDeleteimageResponse extends SpeakeasyBase {
    contentType: string;
    serviceViewModel?: shared.ServiceViewModel;
    statusCode: number;
}
