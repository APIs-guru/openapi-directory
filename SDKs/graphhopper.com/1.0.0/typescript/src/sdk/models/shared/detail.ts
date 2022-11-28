import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Detail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;
}
