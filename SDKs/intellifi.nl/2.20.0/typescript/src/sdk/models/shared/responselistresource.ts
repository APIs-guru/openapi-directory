import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ResponseListResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;
}
