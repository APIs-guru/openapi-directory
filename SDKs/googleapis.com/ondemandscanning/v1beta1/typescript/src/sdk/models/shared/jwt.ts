import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Jwt extends SpeakeasyBase {
  @Metadata({ data: "json, name=compactJwt" })
  compactJwt?: string;
}
