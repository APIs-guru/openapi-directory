import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutSetupV1ResourcegroupsIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutSetupV1ResourcegroupsIdRequests extends SpeakeasyBase {
    resourceGroupUpdateModel?: shared.ResourceGroupUpdateModel;
    resourceGroupUpdateModel1?: shared.ResourceGroupUpdateModel;
    resourceGroupUpdateModel2?: shared.ResourceGroupUpdateModel;
    resourceGroupUpdateModel3?: shared.ResourceGroupUpdateModel;
}
export declare class PutSetupV1ResourcegroupsIdRequest extends SpeakeasyBase {
    pathParams: PutSetupV1ResourcegroupsIdPathParams;
    request?: PutSetupV1ResourcegroupsIdRequests;
}
export declare class PutSetupV1ResourcegroupsIdResponse extends SpeakeasyBase {
    contentType: string;
    resourceGroupViewModel?: shared.ResourceGroupViewModel;
    statusCode: number;
}
