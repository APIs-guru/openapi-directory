import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LocalizedString
/** 
 * A localized string resource.
**/
export class LocalizedString extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
