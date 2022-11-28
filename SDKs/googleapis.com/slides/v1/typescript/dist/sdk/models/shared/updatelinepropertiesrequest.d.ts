import { SpeakeasyBase } from "../../../internal/utils";
import { LineProperties } from "./lineproperties";
/**
 * Updates the properties of a Line.
**/
export declare class UpdateLinePropertiesRequest extends SpeakeasyBase {
    fields?: string;
    lineProperties?: LineProperties;
    objectId?: string;
}
