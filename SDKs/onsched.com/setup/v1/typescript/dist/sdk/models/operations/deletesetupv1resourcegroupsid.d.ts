import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSetupV1ResourcegroupsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteSetupV1ResourcegroupsIdRequest extends SpeakeasyBase {
    pathParams: DeleteSetupV1ResourcegroupsIdPathParams;
}
export declare class DeleteSetupV1ResourcegroupsIdResponse extends SpeakeasyBase {
    contentType: string;
    resourceGroupViewModel?: shared.ResourceGroupViewModel;
    statusCode: number;
}
