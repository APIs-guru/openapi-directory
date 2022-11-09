import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Price extends SpeakeasyBase {
  @Metadata({ data: "json, name=currency" })
  currency?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
