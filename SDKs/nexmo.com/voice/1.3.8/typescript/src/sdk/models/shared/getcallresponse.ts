import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DirectionEnum } from "./directionenum";
import { From } from "./from";
import { To } from "./to";



export class GetCallResponseLinksSelf extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=href" })
  href?: string;
}


export class GetCallResponseLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: GetCallResponseLinksSelf;
}


export class GetCallResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: GetCallResponseLinks;

  @SpeakeasyMetadata({ data: "json, name=conversation_uuid" })
  conversationUuid?: string;

  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction?: DirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: string;

  @SpeakeasyMetadata({ data: "json, name=end_time" })
  endTime?: string;

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: From;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: string;

  @SpeakeasyMetadata({ data: "json, name=rate" })
  rate?: string;

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: To;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid?: string;
}
