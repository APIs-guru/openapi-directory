import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=algoSettings" })
  algoSettings: any;

  @Metadata({ data: "json, name=transformSettings" })
  transformSettings?: TransformSettings;

  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=verificationSettings" })
  verificationSettings: VerificationSettings;
}
