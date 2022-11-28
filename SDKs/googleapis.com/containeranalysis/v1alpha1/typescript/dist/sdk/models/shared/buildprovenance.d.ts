import { SpeakeasyBase } from "../../../internal/utils";
import { Artifact } from "./artifact";
import { Command } from "./command";
import { Source } from "./source";
/**
 * Provenance of a build. Contains all information needed to verify the full details about the build from source to completion.
**/
export declare class BuildProvenance extends SpeakeasyBase {
    buildOptions?: Map<string, string>;
    builderVersion?: string;
    builtArtifacts?: Artifact[];
    commands?: Command[];
    createTime?: string;
    creator?: string;
    finishTime?: string;
    id?: string;
    logsBucket?: string;
    projectId?: string;
    sourceProvenance?: Source;
    startTime?: string;
    triggerId?: string;
}
