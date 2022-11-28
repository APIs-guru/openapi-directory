import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Filtering extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exclude" })
  exclude?: Map<string, string>[];

  @SpeakeasyMetadata({ data: "json, name=include" })
  include?: Map<string, string>[];
}
