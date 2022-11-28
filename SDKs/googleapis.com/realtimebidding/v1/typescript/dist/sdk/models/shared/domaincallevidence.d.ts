import { SpeakeasyBase } from "../../../internal/utils";
import { DomainCalls } from "./domaincalls";
/**
 * Number of HTTP calls made by a creative, broken down by domain.
**/
export declare class DomainCallEvidence extends SpeakeasyBase {
    topHttpCallDomains?: DomainCalls[];
    totalHttpCallCount?: number;
}
