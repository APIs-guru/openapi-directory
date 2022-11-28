import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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
  @SpeakeasyMetadata({ data: "json, name=algoSettings" })
  algoSettings: any;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=verificationSettings" })
  verificationSettings: VerificationSettings;
}
