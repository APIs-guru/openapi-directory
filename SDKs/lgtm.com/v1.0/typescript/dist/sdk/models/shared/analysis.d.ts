import { SpeakeasyBase } from "../../../internal/utils";
import { LanguageStats } from "./languagestats";
import { Project } from "./project";
export declare class Analysis extends SpeakeasyBase {
    commitId?: string;
    id?: string;
    languages?: LanguageStats[];
    logUrl?: string;
    project?: Project;
    resultsUrl?: string;
}
