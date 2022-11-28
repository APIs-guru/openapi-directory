import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ThirdPartyLink } from "./thirdpartylink";



export class ThirdPartyLinkListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: ThirdPartyLink })
  items?: ThirdPartyLink[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
