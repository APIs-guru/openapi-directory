import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Permission extends SpeakeasyBase {
  @Metadata({ data: "json, name=claims" })
  claims?: Map<string, any>;

  @Metadata({ data: "json, name=rsid" })
  rsid?: string;

  @Metadata({ data: "json, name=rsname" })
  rsname?: string;

  @Metadata({ data: "json, name=scopes" })
  scopes?: string[];
}
