import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TopupRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=trx;" })
  trx: string;
}
