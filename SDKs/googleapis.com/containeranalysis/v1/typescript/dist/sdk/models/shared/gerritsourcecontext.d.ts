import { SpeakeasyBase } from "../../../internal/utils";
import { AliasContext } from "./aliascontext";
/**
 * A SourceContext referring to a Gerrit project.
**/
export declare class GerritSourceContext extends SpeakeasyBase {
    aliasContext?: AliasContext;
    gerritProject?: string;
    hostUri?: string;
    revisionId?: string;
}
