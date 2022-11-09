import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { I18nRegion } from "./i18nregion";


export class I18nRegionListResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=eventId" })
  eventId?: string;

  @Metadata({ data: "json, name=items", elemType: shared.I18nRegion })
  items?: I18nRegion[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=visitorId" })
  visitorId?: string;
}
