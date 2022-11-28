import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetrieveSentryRiskDataByIdPathParams extends SpeakeasyBase {
    asteroidId: string;
}
export declare class RetrieveSentryRiskDataByIdRequest extends SpeakeasyBase {
    pathParams: RetrieveSentryRiskDataByIdPathParams;
}
export declare class RetrieveSentryRiskDataByIdResponse extends SpeakeasyBase {
    contentType: string;
    sentryImpactRiskObject?: shared.SentryImpactRiskObject;
    statusCode: number;
}
