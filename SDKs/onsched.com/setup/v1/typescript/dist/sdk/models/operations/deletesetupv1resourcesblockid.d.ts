import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSetupV1ResourcesBlockIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteSetupV1ResourcesBlockIdRequest extends SpeakeasyBase {
    pathParams: DeleteSetupV1ResourcesBlockIdPathParams;
}
export declare class DeleteSetupV1ResourcesBlockIdResponse extends SpeakeasyBase {
    contentType: string;
    resourceBlockViewModel?: shared.ResourceBlockViewModel;
    statusCode: number;
}
