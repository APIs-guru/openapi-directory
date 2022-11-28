import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContextValue } from "./contextvalue";
import { LocalizedString } from "./localizedstring";



// KeyRangeInfo
/** 
 * A message representing information for a key range (possibly one key).
**/
export class KeyRangeInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contextValues", elemType: ContextValue })
  contextValues?: ContextValue[];

  @SpeakeasyMetadata({ data: "json, name=endKeyIndex" })
  endKeyIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=info" })
  info?: LocalizedString;

  @SpeakeasyMetadata({ data: "json, name=keysCount" })
  keysCount?: string;

  @SpeakeasyMetadata({ data: "json, name=metric" })
  metric?: LocalizedString;

  @SpeakeasyMetadata({ data: "json, name=startKeyIndex" })
  startKeyIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=timeOffset" })
  timeOffset?: string;

  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: LocalizedString;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}
