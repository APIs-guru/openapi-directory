import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NameIdPair extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
