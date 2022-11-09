import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RequesterIdentifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=system" })
  system?: string;

  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=value" })
  value: string;
}


export class Requester extends SpeakeasyBase {
  @Metadata({ data: "json, name=identifier" })
  identifier?: RequesterIdentifier;

  @Metadata({ data: "json, name=name" })
  name: string;
}
