import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LdapAuthModuleConfig
/** 
 * Settings to authenticate users using a generic OAuth2 provider
**/
export class LdapAuthModuleConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=adminPassword" })
  adminPassword: string;

  @Metadata({ data: "json, name=adminUsername" })
  adminUsername: string;

  @Metadata({ data: "json, name=desc" })
  desc: string;

  @Metadata({ data: "json, name=emailField" })
  emailField: string;

  @Metadata({ data: "json, name=groupFilter" })
  groupFilter: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=nameField" })
  nameField: string;

  @Metadata({ data: "json, name=otoroshiDataField" })
  otoroshiDataField?: string;

  @Metadata({ data: "json, name=searchBase" })
  searchBase: string;

  @Metadata({ data: "json, name=searchFilter" })
  searchFilter: string;

  @Metadata({ data: "json, name=serverUrl" })
  serverUrl: string;

  @Metadata({ data: "json, name=sessionMaxAge" })
  sessionMaxAge: number;

  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=userBase" })
  userBase: string;
}
