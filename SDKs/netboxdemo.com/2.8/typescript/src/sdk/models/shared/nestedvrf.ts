import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NestedVrf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=prefix_count" })
  prefixCount?: number;

  @SpeakeasyMetadata({ data: "json, name=rd" })
  rd?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
