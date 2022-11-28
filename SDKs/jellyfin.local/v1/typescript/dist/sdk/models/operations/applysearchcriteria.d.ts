import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApplySearchCriteriaPathParams extends SpeakeasyBase {
    itemId: string;
}
export declare class ApplySearchCriteriaQueryParams extends SpeakeasyBase {
    replaceAllImages?: boolean;
}
export declare class ApplySearchCriteriaRequests extends SpeakeasyBase {
    remoteSearchResult?: shared.RemoteSearchResult;
    remoteSearchResult1?: shared.RemoteSearchResult;
    remoteSearchResult2?: shared.RemoteSearchResult;
}
export declare class ApplySearchCriteriaSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class ApplySearchCriteriaRequest extends SpeakeasyBase {
    pathParams: ApplySearchCriteriaPathParams;
    queryParams: ApplySearchCriteriaQueryParams;
    request: ApplySearchCriteriaRequests;
    security: ApplySearchCriteriaSecurity;
}
export declare class ApplySearchCriteriaResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
