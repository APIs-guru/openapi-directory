import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An individual threat; for example, a malicious URL or its hash representation. Only one of these fields should be set.
**/
export declare class GoogleSecuritySafebrowsingV4ThreatEntry extends SpeakeasyBase {
    digest?: string;
    hash?: string;
    url?: string;
}
