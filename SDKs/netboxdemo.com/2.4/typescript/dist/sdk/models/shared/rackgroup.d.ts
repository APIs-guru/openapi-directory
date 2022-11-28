import { SpeakeasyBase } from "../../../internal/utils";
import { NestedSite } from "./nestedsite";
export declare class RackGroup extends SpeakeasyBase {
    id?: number;
    name: string;
    site: NestedSite;
    slug: string;
}
