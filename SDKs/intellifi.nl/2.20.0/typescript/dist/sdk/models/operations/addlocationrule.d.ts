import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddLocationRuleRequest extends SpeakeasyBase {
    request: shared.LocationRuleUpdate;
}
export declare class AddLocationRuleResponse extends SpeakeasyBase {
    contentType: string;
    responseDefaultResource?: shared.ResponseDefaultResource;
    statusCode: number;
}
