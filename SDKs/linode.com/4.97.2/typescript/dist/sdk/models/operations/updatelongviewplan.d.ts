import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateLongviewPlanSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class UpdateLongviewPlanDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class UpdateLongviewPlanRequest extends SpeakeasyBase {
    request: shared.LongviewPlan;
    security: UpdateLongviewPlanSecurity;
}
export declare class UpdateLongviewPlanResponse extends SpeakeasyBase {
    contentType: string;
    longviewSubscription?: shared.LongviewSubscription;
    statusCode: number;
    updateLongviewPlanDefaultApplicationJsonObject?: UpdateLongviewPlanDefaultApplicationJson;
}
