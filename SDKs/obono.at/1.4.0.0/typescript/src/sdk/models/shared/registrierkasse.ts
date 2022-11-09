import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Registrierkasse extends SpeakeasyBase {
  @Metadata({ data: "json, name=Benutzerschluessel" })
  benutzerschluessel?: string;

  @Metadata({ data: "json, name=Kassen-ID" })
  kassenId?: string;

  @Metadata({ data: "json, name=Signaturerstellungseinheit-UUID" })
  signaturerstellungseinheitUuid?: string;

  @Metadata({ data: "json, name=_href" })
  href?: string;

  @Metadata({ data: "json, name=_uuid" })
  uuid?: string;
}
