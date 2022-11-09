import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ContextValue } from "./contextvalue";
import { LocalizedString } from "./localizedstring";
import { LocalizedString } from "./localizedstring";
import { LocalizedString } from "./localizedstring";


// KeyRangeInfo
/** 
 * A message representing information for a key range (possibly one key).
**/
export class KeyRangeInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=contextValues", elemType: shared.ContextValue })
  contextValues?: ContextValue[];

  @Metadata({ data: "json, name=endKeyIndex" })
  endKeyIndex?: number;

  @Metadata({ data: "json, name=info" })
  info?: LocalizedString;

  @Metadata({ data: "json, name=keysCount" })
  keysCount?: string;

  @Metadata({ data: "json, name=metric" })
  metric?: LocalizedString;

  @Metadata({ data: "json, name=startKeyIndex" })
  startKeyIndex?: number;

  @Metadata({ data: "json, name=timeOffset" })
  timeOffset?: string;

  @Metadata({ data: "json, name=unit" })
  unit?: LocalizedString;

  @Metadata({ data: "json, name=value" })
  value?: number;
}
