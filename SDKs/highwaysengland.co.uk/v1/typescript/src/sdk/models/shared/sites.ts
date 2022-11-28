import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Sites extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Active" })
  active?: boolean[];

  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string[];

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string[];

  @SpeakeasyMetadata({ data: "json, name=Lattitude" })
  lattitude?: number[];

  @SpeakeasyMetadata({ data: "json, name=Longitude" })
  longitude?: number[];

  @SpeakeasyMetadata({ data: "json, name=SiteId" })
  siteId?: string[];
}
