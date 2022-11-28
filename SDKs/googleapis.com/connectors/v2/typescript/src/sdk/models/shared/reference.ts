import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Reference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
