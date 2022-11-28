import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Certificate } from "./certificate";


export enum LdapsSettingsStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Updating = "UPDATING",
    Active = "ACTIVE",
    Failed = "FAILED"
}


// LdapsSettingsInput
/** 
 * LDAPSSettings represents the ldaps settings for domain resource. LDAP is the Lightweight Directory Access Protocol, defined in https://tools.ietf.org/html/rfc4511. The settings object configures LDAP over SSL/TLS, whether it is over port 636 or the StartTLS operation. If LDAPSSettings is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state.
**/
export class LdapsSettingsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificate" })
  certificate?: Certificate;

  @SpeakeasyMetadata({ data: "json, name=certificatePassword" })
  certificatePassword?: string;

  @SpeakeasyMetadata({ data: "json, name=certificatePfx" })
  certificatePfx?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


// LdapsSettings
/** 
 * LDAPSSettings represents the ldaps settings for domain resource. LDAP is the Lightweight Directory Access Protocol, defined in https://tools.ietf.org/html/rfc4511. The settings object configures LDAP over SSL/TLS, whether it is over port 636 or the StartTLS operation. If LDAPSSettings is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state.
**/
export class LdapsSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificate" })
  certificate?: Certificate;

  @SpeakeasyMetadata({ data: "json, name=certificatePassword" })
  certificatePassword?: string;

  @SpeakeasyMetadata({ data: "json, name=certificatePfx" })
  certificatePfx?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: LdapsSettingsStateEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
