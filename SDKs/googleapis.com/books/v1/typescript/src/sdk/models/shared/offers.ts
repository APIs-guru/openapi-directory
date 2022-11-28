import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OffersItemsItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=author" })
  author?: string;

  @SpeakeasyMetadata({ data: "json, name=canonicalVolumeLink" })
  canonicalVolumeLink?: string;

  @SpeakeasyMetadata({ data: "json, name=coverUrl" })
  coverUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=volumeId" })
  volumeId?: string;
}


export class OffersItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=artUrl" })
  artUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=gservicesKey" })
  gservicesKey?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: OffersItemsItems })
  items?: OffersItemsItems[];
}


export class Offers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: OffersItems })
  items?: OffersItems[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
