import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// QuotaOverride
/** 
 * A quota override
**/
export class QuotaOverride extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adminOverrideAncestor" })
  adminOverrideAncestor?: string;

  @SpeakeasyMetadata({ data: "json, name=dimensions" })
  dimensions?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=metric" })
  metric?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=overrideValue" })
  overrideValue?: string;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: string;
}
