import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Properties of inheriting and overriding the default click-through event tag. A campaign may override the event tag defined at the advertiser level, and an ad may also override the campaign's setting further.
**/
export declare class DefaultClickThroughEventTagProperties extends SpeakeasyBase {
    defaultClickThroughEventTagId?: string;
    overrideInheritedEventTag?: boolean;
}
