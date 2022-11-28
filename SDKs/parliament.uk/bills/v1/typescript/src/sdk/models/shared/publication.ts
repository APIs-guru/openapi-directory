import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PublicationDocument } from "./publicationdocument";
import { PublicationLink } from "./publicationlink";
import { PublicationType } from "./publicationtype";



export class Publication extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayDate" })
  displayDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=files", elemType: PublicationDocument })
  files?: PublicationDocument[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=links", elemType: PublicationLink })
  links?: PublicationLink[];

  @SpeakeasyMetadata({ data: "json, name=publicationType" })
  publicationType?: PublicationType;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;
}
