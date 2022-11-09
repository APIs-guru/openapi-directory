import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SiteResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description?: string;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Latitude" })
  latitude?: number;

  @Metadata({ data: "json, name=Longitude" })
  longitude?: number;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;
}
