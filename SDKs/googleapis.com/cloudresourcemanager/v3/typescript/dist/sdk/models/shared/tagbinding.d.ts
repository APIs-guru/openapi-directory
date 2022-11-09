import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * A TagBinding represents a connection between a TagValue and a cloud resource (currently project, folder, or organization). Once a TagBinding is created, the TagValue is applied to all the descendants of the cloud resource.
**/
export declare class TagBinding extends SpeakeasyBase {
    name?: string;
    parent?: string;
    tagValue?: string;
}
