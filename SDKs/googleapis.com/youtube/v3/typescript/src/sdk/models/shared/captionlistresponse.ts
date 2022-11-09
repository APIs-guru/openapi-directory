import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Caption } from "./caption";


export class CaptionListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=eventId" })
  eventId?: string;

  @Metadata({ data: "json, name=items", elemType: shared.Caption })
  items?: Caption[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=visitorId" })
  visitorId?: string;
}
