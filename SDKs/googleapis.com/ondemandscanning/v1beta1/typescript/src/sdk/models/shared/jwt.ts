import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Jwt extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=compactJwt" })
  compactJwt?: string;
}
