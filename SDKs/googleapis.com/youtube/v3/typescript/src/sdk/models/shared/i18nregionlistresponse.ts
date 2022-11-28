import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { I18nRegion } from "./i18nregion";



export class I18nRegionListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=eventId" })
  eventId?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: I18nRegion })
  items?: I18nRegion[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=visitorId" })
  visitorId?: string;
}
