import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLocationRuleByIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class GetLocationRuleByIdRequest extends SpeakeasyBase {
    pathParams: GetLocationRuleByIdPathParams;
}
export declare class GetLocationRuleByIdResponse extends SpeakeasyBase {
    contentType: string;
    locationRule?: shared.LocationRule;
    statusCode: number;
}
