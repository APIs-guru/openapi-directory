import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChannelSection } from "./channelsection";



export class ChannelSectionListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=eventId" })
  eventId?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: ChannelSection })
  items?: ChannelSection[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=visitorId" })
  visitorId?: string;
}
