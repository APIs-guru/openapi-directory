import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A message representing a user-facing string whose value may need to be translated before being displayed.
**/
export declare class LocalizedString extends SpeakeasyBase {
    args?: Map<string, string>;
    message?: string;
    token?: string;
}
