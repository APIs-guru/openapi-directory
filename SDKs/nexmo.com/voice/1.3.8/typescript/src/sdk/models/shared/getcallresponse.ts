import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { DirectionEnum } from "./directionenum";
import { From } from "./from";
import { To } from "./to";


export class GetCallResponseLinksSelf extends SpeakeasyBase {
  @Metadata({ data: "json, name=href" })
  href?: string;
}


export class GetCallResponseLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=self" })
  self?: GetCallResponseLinksSelf;
}


export class GetCallResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links" })
  links?: GetCallResponseLinks;

  @Metadata({ data: "json, name=conversation_uuid" })
  conversationUuid?: string;

  @Metadata({ data: "json, name=direction" })
  direction?: DirectionEnum;

  @Metadata({ data: "json, name=duration" })
  duration?: string;

  @Metadata({ data: "json, name=end_time" })
  endTime?: string;

  @Metadata({ data: "json, name=from" })
  from?: From;

  @Metadata({ data: "json, name=network" })
  network?: string;

  @Metadata({ data: "json, name=price" })
  price?: string;

  @Metadata({ data: "json, name=rate" })
  rate?: string;

  @Metadata({ data: "json, name=start_time" })
  startTime?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=to" })
  to?: To;

  @Metadata({ data: "json, name=uuid" })
  uuid?: string;
}
