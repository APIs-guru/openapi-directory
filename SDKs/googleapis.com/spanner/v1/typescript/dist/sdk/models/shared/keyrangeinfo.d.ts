import { SpeakeasyBase } from "../../../internal/utils";
import { ContextValue } from "./contextvalue";
import { LocalizedString } from "./localizedstring";
/**
 * A message representing information for a key range (possibly one key).
**/
export declare class KeyRangeInfo extends SpeakeasyBase {
    contextValues?: ContextValue[];
    endKeyIndex?: number;
    info?: LocalizedString;
    keysCount?: string;
    metric?: LocalizedString;
    startKeyIndex?: number;
    timeOffset?: string;
    unit?: LocalizedString;
    value?: number;
}
