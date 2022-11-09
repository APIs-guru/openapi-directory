import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HsAlgoSettings } from "./hsalgosettings";
import { RsAlgoSettings } from "./rsalgosettings";
import { EsAlgoSettings } from "./esalgosettings";
import { JwksAlgoSettings } from "./jwksalgosettings";
import { InQueryParam } from "./inqueryparam";
import { InHeader } from "./inheader";
import { InCookie } from "./incookie";
import { PassThrough } from "./passthrough";
import { Sign } from "./sign";
import { Transform } from "./transform";


// LocalJwtVerifier
/** 
 * A JWT verifier used only for the current service descriptor
**/
export class LocalJwtVerifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=algoSettings" })
  algoSettings: any;

  @Metadata({ data: "json, name=enabled" })
  enabled: boolean;

  @Metadata({ data: "json, name=source" })
  source: any;

  @Metadata({ data: "json, name=strategy" })
  strategy: any;

  @Metadata({ data: "json, name=strict" })
  strict: boolean;

  @Metadata({ data: "json, name=type" })
  type: string;
}
