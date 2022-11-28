import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class QueryProperties extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: string;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];
}
