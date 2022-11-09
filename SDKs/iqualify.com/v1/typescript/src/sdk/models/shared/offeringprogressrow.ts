import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OfferingProgressRow extends SpeakeasyBase {
  @Metadata({ data: "json, name=completion" })
  completion?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;
}
