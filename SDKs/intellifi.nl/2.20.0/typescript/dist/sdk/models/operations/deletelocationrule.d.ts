import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteLocationRulePathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteLocationRuleRequest extends SpeakeasyBase {
    pathParams: DeleteLocationRulePathParams;
}
export declare class DeleteLocationRuleResponse extends SpeakeasyBase {
    contentType: string;
    responseDefaultResource?: shared.ResponseDefaultResource;
    statusCode: number;
}
