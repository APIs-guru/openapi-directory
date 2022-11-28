import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OfferingProgressRow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=completion" })
  completion?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}
