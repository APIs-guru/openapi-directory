import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Beleg } from "./beleg";



export class BelegeBelegeGruppe extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Belege-kompakt" })
  belegeKompakt: string[];

  @SpeakeasyMetadata({ data: "json, name=Signaturzertifikat" })
  signaturzertifikat: string;

  @SpeakeasyMetadata({ data: "json, name=Zertifizierungsstellen" })
  zertifizierungsstellen: string[];
}


export class Belege extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Belege", elemType: Beleg })
  belege?: Beleg[];

  @SpeakeasyMetadata({ data: "json, name=Belege-Gruppe", elemType: BelegeBelegeGruppe })
  belegeGruppe?: BelegeBelegeGruppe[];
}
