import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RemoteSearchResult } from "./remotesearchresult";
import { RemoteSearchResult } from "./remotesearchresult";


export class RemoteSearchResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=AlbumArtist" })
  albumArtist?: RemoteSearchResult;

  @Metadata({ data: "json, name=Artists", elemType: shared.RemoteSearchResult })
  artists?: RemoteSearchResult[];

  @Metadata({ data: "json, name=ImageUrl" })
  imageUrl?: string;

  @Metadata({ data: "json, name=IndexNumber" })
  indexNumber?: number;

  @Metadata({ data: "json, name=IndexNumberEnd" })
  indexNumberEnd?: number;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Overview" })
  overview?: string;

  @Metadata({ data: "json, name=ParentIndexNumber" })
  parentIndexNumber?: number;

  @Metadata({ data: "json, name=PremiereDate" })
  premiereDate?: Date;

  @Metadata({ data: "json, name=ProductionYear" })
  productionYear?: number;

  @Metadata({ data: "json, name=ProviderIds" })
  providerIds?: Map<string, string>;

  @Metadata({ data: "json, name=SearchProviderName" })
  searchProviderName?: string;
}
