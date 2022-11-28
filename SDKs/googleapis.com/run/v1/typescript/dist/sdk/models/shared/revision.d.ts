import { SpeakeasyBase } from "../../../internal/utils";
import { ObjectMeta } from "./objectmeta";
import { RevisionSpec } from "./revisionspec";
import { RevisionStatus } from "./revisionstatus";
/**
 * Revision is an immutable snapshot of code and configuration. A revision references a container image. Revisions are created by updates to a Configuration. See also: https://github.com/knative/specs/blob/main/specs/serving/overview.md#revision
**/
export declare class Revision extends SpeakeasyBase {
    apiVersion?: string;
    kind?: string;
    metadata?: ObjectMeta;
    spec?: RevisionSpec;
    status?: RevisionStatus;
}
