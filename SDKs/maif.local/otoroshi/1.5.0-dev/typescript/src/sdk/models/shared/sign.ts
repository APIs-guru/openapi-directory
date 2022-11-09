import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HsAlgoSettings } from "./hsalgosettings";
import { RsAlgoSettings } from "./rsalgosettings";
import { EsAlgoSettings } from "./esalgosettings";
import { JwksAlgoSettings } from "./jwksalgosettings";
import { VerificationSettings } from "./verificationsettings";


// Sign
/** 
 * Strategy where signature and field values are verified, and then token si re-signed
**/
export class Sign extends SpeakeasyBase {
  @Metadata({ data: "json, name=algoSettings" })
  algoSettings: any;

  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=verificationSettings" })
  verificationSettings: VerificationSettings;
}
