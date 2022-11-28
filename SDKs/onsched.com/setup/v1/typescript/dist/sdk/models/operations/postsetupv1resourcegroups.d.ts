import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSetupV1ResourcegroupsRequests extends SpeakeasyBase {
    resourceGroupInputModel?: shared.ResourceGroupInputModel;
    resourceGroupInputModel1?: shared.ResourceGroupInputModel;
    resourceGroupInputModel2?: shared.ResourceGroupInputModel;
    resourceGroupInputModel3?: shared.ResourceGroupInputModel;
}
export declare class PostSetupV1ResourcegroupsRequest extends SpeakeasyBase {
    request?: PostSetupV1ResourcegroupsRequests;
}
export declare class PostSetupV1ResourcegroupsResponse extends SpeakeasyBase {
    contentType: string;
    resourceGroupViewModel?: shared.ResourceGroupViewModel;
    statusCode: number;
}
