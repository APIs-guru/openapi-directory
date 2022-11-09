import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PublicationDocument } from "./publicationdocument";
import { HouseEnum } from "./houseenum";
import { PublicationLink } from "./publicationlink";
import { PublicationType } from "./publicationtype";


export class BillPublication extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayDate" })
  displayDate?: Date;

  @Metadata({ data: "json, name=files", elemType: shared.PublicationDocument })
  files?: PublicationDocument[];

  @Metadata({ data: "json, name=house" })
  house?: HouseEnum;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=links", elemType: shared.PublicationLink })
  links?: PublicationLink[];

  @Metadata({ data: "json, name=publicationType" })
  publicationType?: PublicationType;

  @Metadata({ data: "json, name=title" })
  title?: string;
}
