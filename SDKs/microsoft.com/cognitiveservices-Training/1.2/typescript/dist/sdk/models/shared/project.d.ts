import { SpeakeasyBase } from "../../../internal/utils";
import { ProjectSettings } from "./projectsettings";
/**
 * Represents a project
**/
export declare class Project extends SpeakeasyBase {
    created?: Date;
    currentIterationId?: string;
    description?: string;
    id?: string;
    lastModified?: Date;
    name?: string;
    settings?: ProjectSettings;
    thumbnailUri?: string;
}
/**
 * Represents a project
**/
export declare class ProjectInput extends SpeakeasyBase {
    description?: string;
    name?: string;
    settings?: ProjectSettings;
}
