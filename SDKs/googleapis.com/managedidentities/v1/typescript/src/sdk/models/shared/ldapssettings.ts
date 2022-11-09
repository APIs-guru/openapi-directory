import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Certificate } from "./certificate";

export enum LdapsSettingsStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Updating = "UPDATING"
,    Active = "ACTIVE"
,    Failed = "FAILED"
}


// LdapsSettings
/** 
 * LDAPSSettings represents the ldaps settings for domain resource. LDAP is the Lightweight Directory Access Protocol, defined in https://tools.ietf.org/html/rfc4511. The settings object configures LDAP over SSL/TLS, whether it is over port 636 or the StartTLS operation. If LDAPSSettings is being changed, it will be placed into the UPDATING state, which indicates that the resource is being reconciled. At this point, Get will reflect an intermediate state.
**/
export class LdapsSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificate" })
  certificate?: Certificate;

  @Metadata({ data: "json, name=certificatePassword" })
  certificatePassword?: string;

  @Metadata({ data: "json, name=certificatePfx" })
  certificatePfx?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: LdapsSettingsStateEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
