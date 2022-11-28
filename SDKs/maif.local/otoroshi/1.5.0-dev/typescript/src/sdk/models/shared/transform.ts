import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HsAlgoSettings } from "./hsalgosettings";
import { RsAlgoSettings } from "./rsalgosettings";
import { EsAlgoSettings } from "./esalgosettings";
import { JwksAlgoSettings } from "./jwksalgosettings";
import { TransformSettings } from "./transformsettings";
import { VerificationSettings } from "./verificationsettings";



// Transform
/** 
 * Strategy where signature and field values are verified, trasnformed and then token si re-signed
**/
export class Transform extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=algoSettings" })
  algoSettings: any;

  @SpeakeasyMetadata({ data: "json, name=transformSettings" })
  transformSettings?: TransformSettings;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=verificationSettings" })
  verificationSettings: VerificationSettings;
}
