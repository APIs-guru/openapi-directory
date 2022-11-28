import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ItemsTypeEnum {
    Raw = "raw",
    Ext4 = "ext4"
}
/**
 * The values to assign to each partition in this Node Pool's custom disk layout.
 *
**/
export declare class Items extends SpeakeasyBase {
    size?: number;
    type?: ItemsTypeEnum;
}
