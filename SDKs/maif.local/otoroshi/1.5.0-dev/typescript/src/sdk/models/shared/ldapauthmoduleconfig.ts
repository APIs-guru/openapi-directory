import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LdapAuthModuleConfig
/** 
 * Settings to authenticate users using a generic OAuth2 provider
**/
export class LdapAuthModuleConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adminPassword" })
  adminPassword: string;

  @SpeakeasyMetadata({ data: "json, name=adminUsername" })
  adminUsername: string;

  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc: string;

  @SpeakeasyMetadata({ data: "json, name=emailField" })
  emailField: string;

  @SpeakeasyMetadata({ data: "json, name=groupFilter" })
  groupFilter: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=nameField" })
  nameField: string;

  @SpeakeasyMetadata({ data: "json, name=otoroshiDataField" })
  otoroshiDataField?: string;

  @SpeakeasyMetadata({ data: "json, name=searchBase" })
  searchBase: string;

  @SpeakeasyMetadata({ data: "json, name=searchFilter" })
  searchFilter: string;

  @SpeakeasyMetadata({ data: "json, name=serverUrl" })
  serverUrl: string;

  @SpeakeasyMetadata({ data: "json, name=sessionMaxAge" })
  sessionMaxAge: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=userBase" })
  userBase: string;
}
