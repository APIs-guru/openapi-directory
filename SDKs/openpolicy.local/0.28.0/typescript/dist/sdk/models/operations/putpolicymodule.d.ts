import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutPolicyModulePathParams extends SpeakeasyBase {
    id: string;
}
export declare class PutPolicyModuleQueryParams extends SpeakeasyBase {
    metrics?: boolean;
    pretty?: boolean;
}
export declare class PutPolicyModuleRequest extends SpeakeasyBase {
    pathParams: PutPolicyModulePathParams;
    queryParams: PutPolicyModuleQueryParams;
    request: string;
}
export declare class PutPolicyModuleResponse extends SpeakeasyBase {
    twoHundredResult?: shared.TwoHundredResult;
    fourHundred?: shared.FourHundred;
    contentType: string;
    statusCode: number;
}
