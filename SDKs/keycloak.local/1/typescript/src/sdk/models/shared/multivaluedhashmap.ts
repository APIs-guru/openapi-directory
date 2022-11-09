import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MultivaluedHashMap extends SpeakeasyBase {
  @Metadata({ data: "json, name=empty" })
  empty?: boolean;

  @Metadata({ data: "json, name=loadFactor" })
  loadFactor?: number;

  @Metadata({ data: "json, name=threshold" })
  threshold?: number;
}
