import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegionUpdateModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}
