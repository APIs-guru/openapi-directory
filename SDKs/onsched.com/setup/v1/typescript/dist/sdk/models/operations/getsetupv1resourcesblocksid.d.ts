import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSetupV1ResourcesBlocksIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSetupV1ResourcesBlocksIdRequest extends SpeakeasyBase {
    pathParams: GetSetupV1ResourcesBlocksIdPathParams;
}
export declare class GetSetupV1ResourcesBlocksIdResponse extends SpeakeasyBase {
    contentType: string;
    resourceBlockViewModel?: shared.ResourceBlockViewModel;
    statusCode: number;
}
