import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CommitteeListCommitteesGetQueryParams extends SpeakeasyBase {
    apikey?: string;
    chamber?: shared.OrgClassificationEnum;
    classification?: shared.CommitteeClassificationEnum;
    include?: shared.CommitteeIncludeEnum[];
    jurisdiction?: string;
    page?: number;
    parent?: string;
    perPage?: number;
}
export declare class CommitteeListCommitteesGetHeaders extends SpeakeasyBase {
    xApiKey?: string;
}
export declare class CommitteeListCommitteesGetRequest extends SpeakeasyBase {
    queryParams: CommitteeListCommitteesGetQueryParams;
    headers: CommitteeListCommitteesGetHeaders;
}
export declare class CommitteeListCommitteesGetResponse extends SpeakeasyBase {
    committeeList?: shared.CommitteeList;
    contentType: string;
    httpValidationError?: shared.HttpValidationError;
    statusCode: number;
}
