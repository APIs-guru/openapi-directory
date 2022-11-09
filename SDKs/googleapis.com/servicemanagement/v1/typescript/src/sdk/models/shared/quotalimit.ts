import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// QuotaLimit
/** 
 * `QuotaLimit` defines a specific limit that applies over a specified duration for a limit type. There can be at most one limit for a duration and limit type combination defined within a `QuotaGroup`.
**/
export class QuotaLimit extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultLimit" })
  defaultLimit?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=duration" })
  duration?: string;

  @Metadata({ data: "json, name=freeTier" })
  freeTier?: string;

  @Metadata({ data: "json, name=maxLimit" })
  maxLimit?: string;

  @Metadata({ data: "json, name=metric" })
  metric?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=unit" })
  unit?: string;

  @Metadata({ data: "json, name=values" })
  values?: Map<string, string>;
}
