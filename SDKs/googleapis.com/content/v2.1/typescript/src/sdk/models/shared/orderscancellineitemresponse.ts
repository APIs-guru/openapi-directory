import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OrdersCancelLineItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=executionStatus" })
  executionStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
