import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ProductStatusDestinationStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=approvalPending" })
  approvalPending?: boolean;

  @SpeakeasyMetadata({ data: "json, name=approvalStatus" })
  approvalStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=destination" })
  destination?: string;

  @SpeakeasyMetadata({ data: "json, name=intention" })
  intention?: string;
}
