import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSetupV1ResourcesIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteSetupV1ResourcesIdRequest extends SpeakeasyBase {
    pathParams: DeleteSetupV1ResourcesIdPathParams;
}
export declare class DeleteSetupV1ResourcesIdResponse extends SpeakeasyBase {
    contentType: string;
    resourceViewModel?: shared.ResourceViewModel;
    statusCode: number;
}
