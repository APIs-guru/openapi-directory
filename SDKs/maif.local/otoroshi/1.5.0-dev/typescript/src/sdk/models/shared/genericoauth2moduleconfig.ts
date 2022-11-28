import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HsAlgoSettings } from "./hsalgosettings";
import { RsAlgoSettings } from "./rsalgosettings";
import { EsAlgoSettings } from "./esalgosettings";
import { JwksAlgoSettings } from "./jwksalgosettings";



// GenericOauth2ModuleConfig
/** 
 * Settings to authenticate users using a generic OAuth2 provider
**/
export class GenericOauth2ModuleConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accessTokenField" })
  accessTokenField: string;

  @SpeakeasyMetadata({ data: "json, name=authorizeUrl" })
  authorizeUrl: string;

  @SpeakeasyMetadata({ data: "json, name=callbackUrl" })
  callbackUrl: string;

  @SpeakeasyMetadata({ data: "json, name=claims" })
  claims?: string;

  @SpeakeasyMetadata({ data: "json, name=clientId" })
  clientId: string;

  @SpeakeasyMetadata({ data: "json, name=clientSecret" })
  clientSecret: string;

  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc: string;

  @SpeakeasyMetadata({ data: "json, name=emailField" })
  emailField: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=jwtVerifier" })
  jwtVerifier?: any;

  @SpeakeasyMetadata({ data: "json, name=loginUrl" })
  loginUrl: string;

  @SpeakeasyMetadata({ data: "json, name=logoutUrl" })
  logoutUrl: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=nameField" })
  nameField: string;

  @SpeakeasyMetadata({ data: "json, name=oidConfig" })
  oidConfig?: string;

  @SpeakeasyMetadata({ data: "json, name=otoroshiDataField" })
  otoroshiDataField: string;

  @SpeakeasyMetadata({ data: "json, name=readProfileFromToken" })
  readProfileFromToken?: boolean;

  @SpeakeasyMetadata({ data: "json, name=scope" })
  scope?: string;

  @SpeakeasyMetadata({ data: "json, name=sessionMaxAge" })
  sessionMaxAge: number;

  @SpeakeasyMetadata({ data: "json, name=tokenUrl" })
  tokenUrl: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=useCookies" })
  useCookies?: boolean;

  @SpeakeasyMetadata({ data: "json, name=useJson" })
  useJson?: boolean;

  @SpeakeasyMetadata({ data: "json, name=userInfoUrl" })
  userInfoUrl: string;
}
