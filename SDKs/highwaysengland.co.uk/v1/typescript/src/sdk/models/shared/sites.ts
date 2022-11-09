import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Sites extends SpeakeasyBase {
  @Metadata({ data: "json, name=Active" })
  active?: boolean[];

  @Metadata({ data: "json, name=Description" })
  description?: string[];

  @Metadata({ data: "json, name=Id" })
  id?: string[];

  @Metadata({ data: "json, name=Lattitude" })
  lattitude?: number[];

  @Metadata({ data: "json, name=Longitude" })
  longitude?: number[];

  @Metadata({ data: "json, name=SiteId" })
  siteId?: string[];
}
