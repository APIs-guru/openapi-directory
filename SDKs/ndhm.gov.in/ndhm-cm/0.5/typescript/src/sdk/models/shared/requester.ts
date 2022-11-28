import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RequesterIdentifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=system" })
  system?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}


export class Requester extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=identifier" })
  identifier?: RequesterIdentifier;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
