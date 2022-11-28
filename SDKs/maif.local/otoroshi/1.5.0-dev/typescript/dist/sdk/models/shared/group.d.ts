import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An Otoroshi service group is just a group of service descriptor. It is useful to be able to define Api Keys for the whole group
**/
export declare class Group extends SpeakeasyBase {
    description?: string;
    id: string;
    name: string;
}
