import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SiteResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Latitude" })
  latitude?: number;

  @SpeakeasyMetadata({ data: "json, name=Longitude" })
  longitude?: number;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;
}
