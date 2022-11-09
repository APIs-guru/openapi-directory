import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TransferNumberRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=country" })
  country?: string;

  @Metadata({ data: "json, name=from" })
  from?: string;

  @Metadata({ data: "json, name=number" })
  number?: number;

  @Metadata({ data: "json, name=to" })
  to?: string;
}
