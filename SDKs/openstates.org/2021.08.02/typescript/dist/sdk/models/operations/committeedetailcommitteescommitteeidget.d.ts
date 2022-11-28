import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CommitteeDetailCommitteesCommitteeIdGetPathParams extends SpeakeasyBase {
    committeeId: string;
}
export declare class CommitteeDetailCommitteesCommitteeIdGetQueryParams extends SpeakeasyBase {
    apikey?: string;
    include?: shared.CommitteeIncludeEnum[];
}
export declare class CommitteeDetailCommitteesCommitteeIdGetHeaders extends SpeakeasyBase {
    xApiKey?: string;
}
export declare class CommitteeDetailCommitteesCommitteeIdGetRequest extends SpeakeasyBase {
    pathParams: CommitteeDetailCommitteesCommitteeIdGetPathParams;
    queryParams: CommitteeDetailCommitteesCommitteeIdGetQueryParams;
    headers: CommitteeDetailCommitteesCommitteeIdGetHeaders;
}
export declare class CommitteeDetailCommitteesCommitteeIdGetResponse extends SpeakeasyBase {
    committee?: shared.Committee;
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
}
