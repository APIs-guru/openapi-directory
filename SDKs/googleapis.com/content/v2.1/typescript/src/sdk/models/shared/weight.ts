import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Weight extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=unit" })
  unit?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
