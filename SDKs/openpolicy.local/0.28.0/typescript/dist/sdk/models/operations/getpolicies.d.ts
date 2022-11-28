import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPoliciesQueryParams extends SpeakeasyBase {
    pretty?: boolean;
}
export declare class GetPoliciesRequest extends SpeakeasyBase {
    queryParams: GetPoliciesQueryParams;
}
export declare class GetPoliciesResponse extends SpeakeasyBase {
    twoHundredResult?: shared.TwoHundredResult;
    fourHundred?: shared.FourHundred;
    contentType: string;
    statusCode: number;
}
