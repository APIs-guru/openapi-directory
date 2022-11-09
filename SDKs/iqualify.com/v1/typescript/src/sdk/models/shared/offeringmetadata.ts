import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OfferingMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: string;

  @Metadata({ data: "json, name=level" })
  level?: string;

  @Metadata({ data: "json, name=rootContentId" })
  rootContentId?: string;

  @Metadata({ data: "json, name=tags" })
  tags?: string[];

  @Metadata({ data: "json, name=topic" })
  topic?: string;
}
