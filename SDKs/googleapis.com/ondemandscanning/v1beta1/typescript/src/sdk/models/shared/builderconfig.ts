import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class BuilderConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
