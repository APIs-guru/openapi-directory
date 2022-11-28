import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CircuitTypeInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;
}


export class CircuitType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=slug" })
  slug: string;
}
