import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSetupV1ResourcegroupsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetSetupV1ResourcegroupsIdRequest extends SpeakeasyBase {
    pathParams: GetSetupV1ResourcegroupsIdPathParams;
}
export declare class GetSetupV1ResourcegroupsIdResponse extends SpeakeasyBase {
    contentType: string;
    resourceGroupViewModel?: shared.ResourceGroupViewModel;
    statusCode: number;
}
