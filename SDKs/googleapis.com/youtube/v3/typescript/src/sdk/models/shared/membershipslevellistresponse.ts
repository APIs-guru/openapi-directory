import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MembershipsLevel } from "./membershipslevel";



export class MembershipsLevelListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=eventId" })
  eventId?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: MembershipsLevel })
  items?: MembershipsLevel[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=visitorId" })
  visitorId?: string;
}
