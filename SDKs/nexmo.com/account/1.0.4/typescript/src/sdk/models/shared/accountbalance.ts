import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AccountBalance extends SpeakeasyBase {
  @Metadata({ data: "json, name=autoReload" })
  autoReload?: boolean;

  @Metadata({ data: "json, name=value" })
  value?: number;
}
