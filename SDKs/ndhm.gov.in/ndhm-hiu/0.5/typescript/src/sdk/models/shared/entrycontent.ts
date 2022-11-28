import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum EntryContentMediaEnum {
    ApplicationFhirPlusJson = "application/fhir+json"
}


export class EntryContent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=careContextReference" })
  careContextReference: string;

  @SpeakeasyMetadata({ data: "json, name=checksum" })
  checksum: string;

  @SpeakeasyMetadata({ data: "json, name=content" })
  content: string;

  @SpeakeasyMetadata({ data: "json, name=media" })
  media: EntryContentMediaEnum;
}
