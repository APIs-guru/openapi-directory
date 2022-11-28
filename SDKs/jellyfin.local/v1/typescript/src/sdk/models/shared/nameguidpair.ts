import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NameGuidPair extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
