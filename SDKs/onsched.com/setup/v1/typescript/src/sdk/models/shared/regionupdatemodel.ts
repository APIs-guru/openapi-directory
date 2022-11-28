import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegionUpdateModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
