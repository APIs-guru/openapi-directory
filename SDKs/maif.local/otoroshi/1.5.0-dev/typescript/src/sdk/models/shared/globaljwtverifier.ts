import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
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



// GlobalJwtVerifier
/** 
 * A JWT verifier used by multiple service descriptor
**/
export class GlobalJwtVerifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=algoSettings" })
  algoSettings: any;

  @SpeakeasyMetadata({ data: "json, name=desc" })
  desc: string;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source: any;

  @SpeakeasyMetadata({ data: "json, name=strategy" })
  strategy: any;

  @SpeakeasyMetadata({ data: "json, name=strict" })
  strict: boolean;
}
