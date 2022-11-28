import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Conveys information about a Kubernetes access review (e.g. kubectl auth can-i ...) that was involved in a finding.
**/
export declare class AccessReview extends SpeakeasyBase {
    group?: string;
    name?: string;
    ns?: string;
    resource?: string;
    subresource?: string;
    verb?: string;
    version?: string;
}
