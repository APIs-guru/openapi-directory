import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ProductStatusDestinationStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=approvalPending" })
  approvalPending?: boolean;

  @Metadata({ data: "json, name=approvalStatus" })
  approvalStatus?: string;

  @Metadata({ data: "json, name=destination" })
  destination?: string;

  @Metadata({ data: "json, name=intention" })
  intention?: string;
}
