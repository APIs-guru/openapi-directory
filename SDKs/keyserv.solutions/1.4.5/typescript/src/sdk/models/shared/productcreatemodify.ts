import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProductCreateModify extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=custom" })
  custom?: any;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=serial" })
  serial?: string;
}
