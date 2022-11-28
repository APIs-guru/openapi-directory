import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutSetupV1ResourcegroupsIdRecoverPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutSetupV1ResourcegroupsIdRecoverRequest extends SpeakeasyBase {
    pathParams: PutSetupV1ResourcegroupsIdRecoverPathParams;
}
export declare class PutSetupV1ResourcegroupsIdRecoverResponse extends SpeakeasyBase {
    contentType: string;
    resourceViewModel?: shared.ResourceViewModel;
    statusCode: number;
}
