import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MultivaluedHashMap extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=empty" })
  empty?: boolean;

  @SpeakeasyMetadata({ data: "json, name=loadFactor" })
  loadFactor?: number;

  @SpeakeasyMetadata({ data: "json, name=threshold" })
  threshold?: number;
}
