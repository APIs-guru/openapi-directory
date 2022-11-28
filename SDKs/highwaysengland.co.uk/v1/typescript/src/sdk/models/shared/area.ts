import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Area extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Description" })
  description: string;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=XLatitude" })
  xLatitude: string;

  @SpeakeasyMetadata({ data: "json, name=XLongitude" })
  xLongitude: string;

  @SpeakeasyMetadata({ data: "json, name=YLatitude" })
  yLatitude: string;

  @SpeakeasyMetadata({ data: "json, name=YLongitude" })
  yLongitude: string;
}
