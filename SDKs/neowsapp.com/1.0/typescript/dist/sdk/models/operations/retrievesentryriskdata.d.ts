import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetrieveSentryRiskDataQueryParams extends SpeakeasyBase {
    isActive?: boolean;
    page?: number;
    size?: number;
}
export declare class RetrieveSentryRiskDataRequest extends SpeakeasyBase {
    queryParams: RetrieveSentryRiskDataQueryParams;
}
export declare class RetrieveSentryRiskDataResponse extends SpeakeasyBase {
    contentType: string;
    sentryObjectPagingDto?: shared.SentryObjectPagingDto;
    statusCode: number;
}
