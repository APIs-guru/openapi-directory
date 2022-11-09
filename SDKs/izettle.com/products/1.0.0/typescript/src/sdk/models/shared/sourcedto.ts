import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SourceDto extends SpeakeasyBase {
  @Metadata({ data: "json, name=external" })
  external?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
