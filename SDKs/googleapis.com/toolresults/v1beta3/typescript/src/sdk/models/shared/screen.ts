import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Screen extends SpeakeasyBase {
  @Metadata({ data: "json, name=fileReference" })
  fileReference?: string;

  @Metadata({ data: "json, name=locale" })
  locale?: string;

  @Metadata({ data: "json, name=model" })
  model?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
