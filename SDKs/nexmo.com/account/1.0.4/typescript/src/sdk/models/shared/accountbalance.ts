import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccountBalance extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=autoReload" })
  autoReload?: boolean;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: number;
}
