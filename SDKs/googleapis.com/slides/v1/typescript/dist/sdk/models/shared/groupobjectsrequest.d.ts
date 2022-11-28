import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Groups objects to create an object group. For example, groups PageElements to create a Group on the same page as all the children.
**/
export declare class GroupObjectsRequest extends SpeakeasyBase {
    childrenObjectIds?: string[];
    groupObjectId?: string;
}
