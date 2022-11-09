import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ResponseListResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status?: number;

  @Metadata({ data: "json, name=total" })
  total?: number;
}
