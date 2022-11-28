import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum EntryLinkMediaEnum {
    ApplicationFhirPlusJson = "application/fhir+json"
}


export class EntryLink extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=careContextReference" })
  careContextReference: string;

  @SpeakeasyMetadata({ data: "json, name=checksum" })
  checksum: string;

  @SpeakeasyMetadata({ data: "json, name=link" })
  link: string;

  @SpeakeasyMetadata({ data: "json, name=media" })
  media: EntryLinkMediaEnum;
}
