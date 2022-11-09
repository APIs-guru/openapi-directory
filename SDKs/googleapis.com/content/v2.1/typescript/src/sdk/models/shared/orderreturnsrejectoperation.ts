import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OrderreturnsRejectOperation extends SpeakeasyBase {
  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=reasonText" })
  reasonText?: string;
}
