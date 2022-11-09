import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AccountStatusItemLevelIssue extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributeName" })
  attributeName?: string;

  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=detail" })
  detail?: string;

  @Metadata({ data: "json, name=documentation" })
  documentation?: string;

  @Metadata({ data: "json, name=numItems" })
  numItems?: string;

  @Metadata({ data: "json, name=resolution" })
  resolution?: string;

  @Metadata({ data: "json, name=servability" })
  servability?: string;
}
