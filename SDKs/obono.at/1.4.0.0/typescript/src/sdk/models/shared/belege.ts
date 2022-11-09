import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Beleg } from "./beleg";


export class BelegeBelegeGruppe extends SpeakeasyBase {
  @Metadata({ data: "json, name=Belege-kompakt" })
  belegeKompakt: string[];

  @Metadata({ data: "json, name=Signaturzertifikat" })
  signaturzertifikat: string;

  @Metadata({ data: "json, name=Zertifizierungsstellen" })
  zertifizierungsstellen: string[];
}


export class Belege extends SpeakeasyBase {
  @Metadata({ data: "json, name=Belege", elemType: shared.Beleg })
  belege?: Beleg[];

  @Metadata({ data: "json, name=Belege-Gruppe", elemType: shared.BelegeBelegeGruppe })
  belegeGruppe?: BelegeBelegeGruppe[];
}
