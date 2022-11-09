import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Material extends SpeakeasyBase {
  @Metadata({ data: "json, name=digest" })
  digest?: Map<string, string>;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
