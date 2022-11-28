import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// QuotaLimit
/** 
 * `QuotaLimit` defines a specific limit that applies over a specified duration for a limit type. There can be at most one limit for a duration and limit type combination defined within a `QuotaGroup`.
**/
export class QuotaLimit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultLimit" })
  defaultLimit?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: string;

  @SpeakeasyMetadata({ data: "json, name=freeTier" })
  freeTier?: string;

  @SpeakeasyMetadata({ data: "json, name=maxLimit" })
  maxLimit?: string;

  @SpeakeasyMetadata({ data: "json, name=metric" })
  metric?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: string;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: Map<string, string>;
}
