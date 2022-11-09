import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// QuotaOverride
/** 
 * A quota override
**/
export class QuotaOverride extends SpeakeasyBase {
  @Metadata({ data: "json, name=adminOverrideAncestor" })
  adminOverrideAncestor?: string;

  @Metadata({ data: "json, name=dimensions" })
  dimensions?: Map<string, string>;

  @Metadata({ data: "json, name=metric" })
  metric?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=overrideValue" })
  overrideValue?: string;

  @Metadata({ data: "json, name=unit" })
  unit?: string;
}
