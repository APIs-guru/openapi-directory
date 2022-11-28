import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DefaultClickThroughEventTagProperties
/** 
 * Properties of inheriting and overriding the default click-through event tag. A campaign may override the event tag defined at the advertiser level, and an ad may also override the campaign's setting further.
**/
export class DefaultClickThroughEventTagProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultClickThroughEventTagId" })
  defaultClickThroughEventTagId?: string;

  @SpeakeasyMetadata({ data: "json, name=overrideInheritedEventTag" })
  overrideInheritedEventTag?: boolean;
}
