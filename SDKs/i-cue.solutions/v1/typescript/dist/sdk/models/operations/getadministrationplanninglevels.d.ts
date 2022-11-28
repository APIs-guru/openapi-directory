import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAdministrationPlanningLevelsHeaders extends SpeakeasyBase {
    token?: string;
}
export declare class GetAdministrationPlanningLevelsRequest extends SpeakeasyBase {
    headers: GetAdministrationPlanningLevelsHeaders;
}
export declare class GetAdministrationPlanningLevelsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    planningLevelInfoResponses?: shared.PlanningLevelInfoResponse[];
    statusCode: number;
}
