import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Link extends SpeakeasyBase {
  @Metadata({ data: "json, name=@Href" })
  atHref?: string;

  @Metadata({ data: "json, name=@Rel" })
  atRel?: string;
}
