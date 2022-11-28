import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NameIn extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
