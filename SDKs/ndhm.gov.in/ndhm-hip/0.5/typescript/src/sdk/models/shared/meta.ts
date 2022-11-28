import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MetaCommunicationMediumEnum {
    Mobile = "MOBILE",
    Email = "EMAIL"
}


export class Meta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=communicationExpiry" })
  communicationExpiry?: string;

  @SpeakeasyMetadata({ data: "json, name=communicationHint" })
  communicationHint?: string;

  @SpeakeasyMetadata({ data: "json, name=communicationMedium" })
  communicationMedium: MetaCommunicationMediumEnum;
}
