import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Area extends SpeakeasyBase {
  @Metadata({ data: "json, name=Description" })
  description: string;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=XLatitude" })
  xLatitude: string;

  @Metadata({ data: "json, name=XLongitude" })
  xLongitude: string;

  @Metadata({ data: "json, name=YLatitude" })
  yLatitude: string;

  @Metadata({ data: "json, name=YLongitude" })
  yLongitude: string;
}
