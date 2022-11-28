import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Permission extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=claims" })
  claims?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=rsid" })
  rsid?: string;

  @SpeakeasyMetadata({ data: "json, name=rsname" })
  rsname?: string;

  @SpeakeasyMetadata({ data: "json, name=scopes" })
  scopes?: string[];
}
