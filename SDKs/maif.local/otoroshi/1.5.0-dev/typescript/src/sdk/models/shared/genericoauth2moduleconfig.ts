import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HsAlgoSettings } from "./hsalgosettings";
import { RsAlgoSettings } from "./rsalgosettings";
import { EsAlgoSettings } from "./esalgosettings";
import { JwksAlgoSettings } from "./jwksalgosettings";


// GenericOauth2ModuleConfig
/** 
 * Settings to authenticate users using a generic OAuth2 provider
**/
export class GenericOauth2ModuleConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=accessTokenField" })
  accessTokenField: string;

  @Metadata({ data: "json, name=authorizeUrl" })
  authorizeUrl: string;

  @Metadata({ data: "json, name=callbackUrl" })
  callbackUrl: string;

  @Metadata({ data: "json, name=claims" })
  claims?: string;

  @Metadata({ data: "json, name=clientId" })
  clientId: string;

  @Metadata({ data: "json, name=clientSecret" })
  clientSecret: string;

  @Metadata({ data: "json, name=desc" })
  desc: string;

  @Metadata({ data: "json, name=emailField" })
  emailField: string;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=jwtVerifier" })
  jwtVerifier?: any;

  @Metadata({ data: "json, name=loginUrl" })
  loginUrl: string;

  @Metadata({ data: "json, name=logoutUrl" })
  logoutUrl: string;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=nameField" })
  nameField: string;

  @Metadata({ data: "json, name=oidConfig" })
  oidConfig?: string;

  @Metadata({ data: "json, name=otoroshiDataField" })
  otoroshiDataField: string;

  @Metadata({ data: "json, name=readProfileFromToken" })
  readProfileFromToken?: boolean;

  @Metadata({ data: "json, name=scope" })
  scope?: string;

  @Metadata({ data: "json, name=sessionMaxAge" })
  sessionMaxAge: number;

  @Metadata({ data: "json, name=tokenUrl" })
  tokenUrl: string;

  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=useCookies" })
  useCookies?: boolean;

  @Metadata({ data: "json, name=useJson" })
  useJson?: boolean;

  @Metadata({ data: "json, name=userInfoUrl" })
  userInfoUrl: string;
}
