import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A TagBinding represents a connection between a TagValue and a cloud resource Once a TagBinding is created, the TagValue is applied to all the descendants of the Google Cloud resource.
**/
export declare class TagBindingInput extends SpeakeasyBase {
    parent?: string;
    tagValue?: string;
}
/**
 * A TagBinding represents a connection between a TagValue and a cloud resource Once a TagBinding is created, the TagValue is applied to all the descendants of the Google Cloud resource.
**/
export declare class TagBinding extends SpeakeasyBase {
    name?: string;
    parent?: string;
    tagValue?: string;
}
