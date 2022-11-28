import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSetupV1ServicesBlockIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteSetupV1ServicesBlockIdRequest extends SpeakeasyBase {
    pathParams: DeleteSetupV1ServicesBlockIdPathParams;
}
export declare class DeleteSetupV1ServicesBlockIdResponse extends SpeakeasyBase {
    contentType: string;
    resourceBlockViewModel?: shared.ResourceBlockViewModel;
    statusCode: number;
}
