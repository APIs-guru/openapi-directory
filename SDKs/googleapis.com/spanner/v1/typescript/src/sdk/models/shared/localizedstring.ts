import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LocalizedString
/** 
 * A message representing a user-facing string whose value may need to be translated before being displayed.
**/
export class LocalizedString extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=args" })
  args?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;
}
