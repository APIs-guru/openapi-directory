import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @Metadata({ data: "json, name=advertiserIdDimensionValue" })
  advertiserIdDimensionValue?: DimensionValue;

  @Metadata({ data: "json, name=dayPartTargeting" })
  dayPartTargeting?: DayPartTargeting;

  @Metadata({ data: "json, name=geoTargeting" })
  geoTargeting?: GeoTargeting;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=keyValueTargetingExpression" })
  keyValueTargetingExpression?: KeyValueTargetingExpression;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=languageTargeting" })
  languageTargeting?: LanguageTargeting;

  @Metadata({ data: "json, name=listTargetingExpression" })
  listTargetingExpression?: ListTargetingExpression;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=subaccountId" })
  subaccountId?: string;

  @Metadata({ data: "json, name=technologyTargeting" })
  technologyTargeting?: TechnologyTargeting;
}
