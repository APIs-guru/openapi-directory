import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DimensionValue } from "./dimensionvalue";
import { DayPartTargeting } from "./dayparttargeting";
import { GeoTargeting } from "./geotargeting";
import { KeyValueTargetingExpression } from "./keyvaluetargetingexpression";
import { LanguageTargeting } from "./languagetargeting";
import { ListTargetingExpression } from "./listtargetingexpression";
import { TechnologyTargeting } from "./technologytargeting";



// TargetingTemplate
/** 
 * Contains properties of a targeting template. A targeting template encapsulates targeting information which can be reused across multiple ads.
**/
export class TargetingTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @SpeakeasyMetadata({ data: "json, name=advertiserIdDimensionValue" })
  advertiserIdDimensionValue?: DimensionValue;

  @SpeakeasyMetadata({ data: "json, name=dayPartTargeting" })
  dayPartTargeting?: DayPartTargeting;

  @SpeakeasyMetadata({ data: "json, name=geoTargeting" })
  geoTargeting?: GeoTargeting;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=keyValueTargetingExpression" })
  keyValueTargetingExpression?: KeyValueTargetingExpression;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=languageTargeting" })
  languageTargeting?: LanguageTargeting;

  @SpeakeasyMetadata({ data: "json, name=listTargetingExpression" })
  listTargetingExpression?: ListTargetingExpression;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=subaccountId" })
  subaccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=technologyTargeting" })
  technologyTargeting?: TechnologyTargeting;
}
