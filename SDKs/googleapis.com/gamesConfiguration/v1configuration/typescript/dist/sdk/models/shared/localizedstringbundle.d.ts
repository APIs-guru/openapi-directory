import { SpeakeasyBase } from "../../../internal/utils";
import { LocalizedString } from "./localizedstring";
/**
 * A localized string bundle resource.
**/
export declare class LocalizedStringBundle extends SpeakeasyBase {
    kind?: string;
    translations?: LocalizedString[];
}
