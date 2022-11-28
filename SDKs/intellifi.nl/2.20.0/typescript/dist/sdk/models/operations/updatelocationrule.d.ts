import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateLocationRulePathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateLocationRuleRequest extends SpeakeasyBase {
    pathParams: UpdateLocationRulePathParams;
    request: shared.LocationRuleUpdate;
}
export declare class UpdateLocationRuleResponse extends SpeakeasyBase {
    contentType: string;
    responseDefaultResource?: shared.ResponseDefaultResource;
    statusCode: number;
}
