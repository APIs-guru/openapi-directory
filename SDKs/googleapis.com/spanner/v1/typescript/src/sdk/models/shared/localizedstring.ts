import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LocalizedString
/** 
 * A message representing a user-facing string whose value may need to be translated before being displayed.
**/
export class LocalizedString extends SpeakeasyBase {
  @Metadata({ data: "json, name=args" })
  args?: Map<string, string>;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=token" })
  token?: string;
}
