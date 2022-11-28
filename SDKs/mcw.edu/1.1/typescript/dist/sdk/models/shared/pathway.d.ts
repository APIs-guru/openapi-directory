import { SpeakeasyBase } from "../../../internal/utils";
import { PathwayObject } from "./pathwayobject";
import { Reference } from "./reference";
export declare class Pathway extends SpeakeasyBase {
    description?: string;
    hasAlteredPath?: string;
    id?: string;
    name?: string;
    objectList?: PathwayObject[];
    pathwayCategories?: string[];
    referenceList?: Reference[];
}
