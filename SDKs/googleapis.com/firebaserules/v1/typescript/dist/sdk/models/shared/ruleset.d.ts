import { SpeakeasyBase } from "../../../internal/utils";
import { Metadata } from "./metadata";
import { Source } from "./source";
/**
 * `Ruleset` is an immutable copy of `Source` with a globally unique identifier and a creation time.
**/
export declare class Ruleset extends SpeakeasyBase {
    createTime?: string;
    metadata?: Metadata;
    name?: string;
    source?: Source;
}
/**
 * `Ruleset` is an immutable copy of `Source` with a globally unique identifier and a creation time.
**/
export declare class RulesetInput extends SpeakeasyBase {
    metadata?: Metadata;
    source?: Source;
}
