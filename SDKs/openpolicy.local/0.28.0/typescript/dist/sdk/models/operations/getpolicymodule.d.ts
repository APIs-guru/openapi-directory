import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPolicyModulePathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetPolicyModuleQueryParams extends SpeakeasyBase {
    pretty?: boolean;
}
export declare class GetPolicyModuleRequest extends SpeakeasyBase {
    pathParams: GetPolicyModulePathParams;
    queryParams: GetPolicyModuleQueryParams;
}
export declare class GetPolicyModuleResponse extends SpeakeasyBase {
    twoHundredResult?: shared.TwoHundredResult;
    fourHundred?: shared.FourHundred;
    fourHundredAndFour?: shared.FourHundredAndFour;
    contentType: string;
    statusCode: number;
}
