import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSetupV1ResourcesIdDeleteimagePathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteSetupV1ResourcesIdDeleteimageRequest extends SpeakeasyBase {
    pathParams: DeleteSetupV1ResourcesIdDeleteimagePathParams;
}
export declare class DeleteSetupV1ResourcesIdDeleteimageResponse extends SpeakeasyBase {
    contentType: string;
    resourceViewModel?: shared.ResourceViewModel;
    statusCode: number;
}
