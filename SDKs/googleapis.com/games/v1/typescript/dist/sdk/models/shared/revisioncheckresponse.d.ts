import { SpeakeasyBase } from "../../../internal/utils";
export declare enum RevisionCheckResponseRevisionStatusEnum {
    RevisionStatusUnspecified = "REVISION_STATUS_UNSPECIFIED",
    Ok = "OK",
    Deprecated = "DEPRECATED",
    Invalid = "INVALID"
}
/**
 * A third party checking a revision response.
**/
export declare class RevisionCheckResponse extends SpeakeasyBase {
    apiVersion?: string;
    kind?: string;
    revisionStatus?: RevisionCheckResponseRevisionStatusEnum;
}
