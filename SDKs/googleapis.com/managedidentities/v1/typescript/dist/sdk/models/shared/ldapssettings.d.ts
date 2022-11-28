import { SpeakeasyBase } from "../../../internal/utils";
import { Certificate } from "./certificate";
export declare enum LdapsSettingsStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Updating = "UPDATING",
    Active = "ACTIVE",
    Failed = "FAILED"
}
/**
 * LDAPSSettings represents the ldaps settings for domain resource. LDAP is the Lightweight Directory Access Protocol, defined in https://tools.ietf.org/html/rfc4511. The settings object configures LDAP over SSL/TLS, whether it is over port 636 or the StartTLS operation. If LDAPSSettings is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state.
**/
export declare class LdapsSettingsInput extends SpeakeasyBase {
    certificate?: Certificate;
    certificatePassword?: string;
    certificatePfx?: string;
    name?: string;
}
/**
 * LDAPSSettings represents the ldaps settings for domain resource. LDAP is the Lightweight Directory Access Protocol, defined in https://tools.ietf.org/html/rfc4511. The settings object configures LDAP over SSL/TLS, whether it is over port 636 or the StartTLS operation. If LDAPSSettings is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state.
**/
export declare class LdapsSettings extends SpeakeasyBase {
    certificate?: Certificate;
    certificatePassword?: string;
    certificatePfx?: string;
    name?: string;
    state?: LdapsSettingsStateEnum;
    updateTime?: string;
}
