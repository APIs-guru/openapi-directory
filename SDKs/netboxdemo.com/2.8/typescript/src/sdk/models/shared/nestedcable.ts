import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NestedCableInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;
}


export class NestedCable extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
