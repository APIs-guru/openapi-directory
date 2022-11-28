import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MemcacheParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=params" })
  params?: Map<string, string>;
}


export class MemcacheParametersInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=params" })
  params?: Map<string, string>;
}
