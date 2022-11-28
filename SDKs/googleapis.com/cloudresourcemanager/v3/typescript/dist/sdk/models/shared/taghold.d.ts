import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A TagHold represents the use of a TagValue that is not captured by TagBindings. If a TagValue has any TagHolds, deletion will be blocked. This resource is intended to be created in the same cloud location as the `holder`.
**/
export declare class TagHold extends SpeakeasyBase {
    createTime?: string;
    helpLink?: string;
    holder?: string;
    name?: string;
    origin?: string;
}
/**
 * A TagHold represents the use of a TagValue that is not captured by TagBindings. If a TagValue has any TagHolds, deletion will be blocked. This resource is intended to be created in the same cloud location as the `holder`.
**/
export declare class TagHoldInput extends SpeakeasyBase {
    helpLink?: string;
    holder?: string;
    origin?: string;
}
