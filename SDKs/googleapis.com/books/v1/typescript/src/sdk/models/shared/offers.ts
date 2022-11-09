import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class OffersItemsItems extends SpeakeasyBase {
  @Metadata({ data: "json, name=author" })
  author?: string;

  @Metadata({ data: "json, name=canonicalVolumeLink" })
  canonicalVolumeLink?: string;

  @Metadata({ data: "json, name=coverUrl" })
  coverUrl?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=title" })
  title?: string;

  @Metadata({ data: "json, name=volumeId" })
  volumeId?: string;
}


export class OffersItems extends SpeakeasyBase {
  @Metadata({ data: "json, name=artUrl" })
  artUrl?: string;

  @Metadata({ data: "json, name=gservicesKey" })
  gservicesKey?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=items", elemType: shared.OffersItemsItems })
  items?: OffersItemsItems[];
}


export class Offers extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.OffersItems })
  items?: OffersItems[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
