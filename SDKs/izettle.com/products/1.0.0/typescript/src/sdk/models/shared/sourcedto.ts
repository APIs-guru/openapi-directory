import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SourceDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=external" })
  external?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
