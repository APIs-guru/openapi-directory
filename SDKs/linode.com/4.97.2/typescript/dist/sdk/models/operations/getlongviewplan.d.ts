import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetLongviewPlanSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetLongviewPlanDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetLongviewPlanRequest extends SpeakeasyBase {
    security: GetLongviewPlanSecurity;
}
export declare class GetLongviewPlanResponse extends SpeakeasyBase {
    contentType: string;
    longviewSubscription?: shared.LongviewSubscription;
    statusCode: number;
    getLongviewPlanDefaultApplicationJsonObject?: GetLongviewPlanDefaultApplicationJson;
}
