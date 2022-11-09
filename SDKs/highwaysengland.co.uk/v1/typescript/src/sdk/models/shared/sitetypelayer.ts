import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Sites } from "./sites";


export class SiteTypeLayer extends SpeakeasyBase {
  @Metadata({ data: "json, name=Sites", elemType: shared.Sites })
  sites?: Sites[];
}
