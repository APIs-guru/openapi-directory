import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AccountStatusItemLevelIssue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributeName" })
  attributeName?: string;

  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=documentation" })
  documentation?: string;

  @SpeakeasyMetadata({ data: "json, name=numItems" })
  numItems?: string;

  @SpeakeasyMetadata({ data: "json, name=resolution" })
  resolution?: string;

  @SpeakeasyMetadata({ data: "json, name=servability" })
  servability?: string;
}
