import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ThirdPartyLink } from "./thirdpartylink";


export class ThirdPartyLinkListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=items", elemType: shared.ThirdPartyLink })
  items?: ThirdPartyLink[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
