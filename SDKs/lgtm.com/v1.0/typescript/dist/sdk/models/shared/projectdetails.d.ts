import { SpeakeasyBase } from "../../../internal/utils";
import { ProjectLanguageStats } from "./projectlanguagestats";
export declare class ProjectDetails extends SpeakeasyBase {
    id?: number;
    languages?: ProjectLanguageStats[];
    name?: string;
    url?: string;
    urlIdentifier?: string;
}
