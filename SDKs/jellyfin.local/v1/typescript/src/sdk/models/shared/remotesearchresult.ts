import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RemoteSearchResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AlbumArtist" })
  albumArtist?: RemoteSearchResult;

  @SpeakeasyMetadata({ data: "json, name=Artists", elemType: RemoteSearchResult })
  artists?: RemoteSearchResult[];

  @SpeakeasyMetadata({ data: "json, name=ImageUrl" })
  imageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=IndexNumber" })
  indexNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=IndexNumberEnd" })
  indexNumberEnd?: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Overview" })
  overview?: string;

  @SpeakeasyMetadata({ data: "json, name=ParentIndexNumber" })
  parentIndexNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=PremiereDate" })
  premiereDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=ProductionYear" })
  productionYear?: number;

  @SpeakeasyMetadata({ data: "json, name=ProviderIds" })
  providerIds?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=SearchProviderName" })
  searchProviderName?: string;
}
