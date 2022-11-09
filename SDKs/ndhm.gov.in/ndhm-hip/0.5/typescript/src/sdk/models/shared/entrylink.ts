import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum EntryLinkMediaEnum {
    ApplicationFhirPlusJson = "application/fhir+json"
}


export class EntryLink extends SpeakeasyBase {
  @Metadata({ data: "json, name=careContextReference" })
  careContextReference: string;

  @Metadata({ data: "json, name=checksum" })
  checksum: string;

  @Metadata({ data: "json, name=link" })
  link: string;

  @Metadata({ data: "json, name=media" })
  media: EntryLinkMediaEnum;
}
