import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A (kind, ID/name) pair used to construct a key path. If either name or ID is set, the element is complete. If neither is set, the element is incomplete.
**/
export declare class GooglePrivacyDlpV2PathElement extends SpeakeasyBase {
    id?: string;
    kind?: string;
    name?: string;
}
