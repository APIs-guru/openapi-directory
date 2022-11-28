import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Link extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=@Href" })
  atHref?: string;

  @SpeakeasyMetadata({ data: "json, name=@Rel" })
  atRel?: string;
}
