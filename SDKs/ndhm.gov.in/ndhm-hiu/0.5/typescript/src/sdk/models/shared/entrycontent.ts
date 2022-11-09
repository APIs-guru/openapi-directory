import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum EntryContentMediaEnum {
    ApplicationFhirPlusJson = "application/fhir+json"
}


export class EntryContent extends SpeakeasyBase {
  @Metadata({ data: "json, name=careContextReference" })
  careContextReference: string;

  @Metadata({ data: "json, name=checksum" })
  checksum: string;

  @Metadata({ data: "json, name=content" })
  content: string;

  @Metadata({ data: "json, name=media" })
  media: EntryContentMediaEnum;
}
