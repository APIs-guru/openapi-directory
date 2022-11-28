import { SpeakeasyBase } from "../../../internal/utils";
import { ProfileMetadata } from "./profilemetadata";
export declare enum SourceTypeEnum {
    SourceTypeUnspecified = "SOURCE_TYPE_UNSPECIFIED",
    Account = "ACCOUNT",
    Profile = "PROFILE",
    DomainProfile = "DOMAIN_PROFILE",
    Contact = "CONTACT",
    OtherContact = "OTHER_CONTACT",
    DomainContact = "DOMAIN_CONTACT"
}
/**
 * The source of a field.
**/
export declare class Source extends SpeakeasyBase {
    etag?: string;
    id?: string;
    profileMetadata?: ProfileMetadata;
    type?: SourceTypeEnum;
    updateTime?: string;
}
/**
 * The source of a field.
**/
export declare class SourceInput extends SpeakeasyBase {
    etag?: string;
    id?: string;
    type?: SourceTypeEnum;
}
