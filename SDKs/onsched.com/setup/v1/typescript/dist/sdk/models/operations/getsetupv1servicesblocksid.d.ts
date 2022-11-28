import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSetupV1ServicesBlocksIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSetupV1ServicesBlocksIdRequest extends SpeakeasyBase {
    pathParams: GetSetupV1ServicesBlocksIdPathParams;
}
export declare class GetSetupV1ServicesBlocksIdResponse extends SpeakeasyBase {
    contentType: string;
    resourceBlockViewModel?: shared.ResourceBlockViewModel;
    statusCode: number;
}
