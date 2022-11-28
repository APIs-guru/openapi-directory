import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a consent store.
**/
export declare class ConsentStore extends SpeakeasyBase {
    defaultConsentTtl?: string;
    enableConsentCreateOnUpdate?: boolean;
    labels?: Map<string, string>;
    name?: string;
}
