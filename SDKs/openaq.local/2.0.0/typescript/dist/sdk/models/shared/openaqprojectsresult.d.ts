import { SpeakeasyBase } from "../../../internal/utils";
import { Meta } from "./meta";
import { ProjectsRow } from "./projectsrow";
export declare class OpenAqProjectsResult extends SpeakeasyBase {
    meta?: Meta;
    results: ProjectsRow[];
}
