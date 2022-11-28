import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSetupV1ResourcesIdServicesPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteSetupV1ResourcesIdServicesRequest extends SpeakeasyBase {
    pathParams: DeleteSetupV1ResourcesIdServicesPathParams;
}
export declare class DeleteSetupV1ResourcesIdServicesResponse extends SpeakeasyBase {
    contentType: string;
    resourceViewModel?: shared.ResourceViewModel;
    statusCode: number;
}
