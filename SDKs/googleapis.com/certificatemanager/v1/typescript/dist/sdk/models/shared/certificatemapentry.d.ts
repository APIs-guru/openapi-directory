import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum CertificateMapEntryMatcherEnum {
    MatcherUnspecified = "MATCHER_UNSPECIFIED",
    Primary = "PRIMARY"
}
export declare enum CertificateMapEntryStateEnum {
    ServingStateUnspecified = "SERVING_STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Pending = "PENDING"
}
/**
 * Defines a certificate map entry.
**/
export declare class CertificateMapEntry extends SpeakeasyBase {
    certificates?: string[];
    createTime?: string;
    description?: string;
    hostname?: string;
    labels?: Map<string, string>;
    matcher?: CertificateMapEntryMatcherEnum;
    name?: string;
    state?: CertificateMapEntryStateEnum;
    updateTime?: string;
}
