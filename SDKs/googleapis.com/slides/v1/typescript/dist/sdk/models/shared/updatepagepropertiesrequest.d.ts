import { SpeakeasyBase } from "../../../internal/utils";
import { PageProperties } from "./pageproperties";
/**
 * Updates the properties of a Page.
**/
export declare class UpdatePagePropertiesRequest extends SpeakeasyBase {
    fields?: string;
    objectId?: string;
    pageProperties?: PageProperties;
}
