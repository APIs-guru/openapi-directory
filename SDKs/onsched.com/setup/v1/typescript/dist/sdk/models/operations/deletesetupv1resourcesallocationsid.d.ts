import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSetupV1ResourcesAllocationsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteSetupV1ResourcesAllocationsIdRequest extends SpeakeasyBase {
    pathParams: DeleteSetupV1ResourcesAllocationsIdPathParams;
}
export declare class DeleteSetupV1ResourcesAllocationsIdResponse extends SpeakeasyBase {
    contentType: string;
    resourceBlockViewModel?: shared.ResourceBlockViewModel;
    statusCode: number;
}
