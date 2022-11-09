import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum MetaCommunicationMediumEnum {
    Mobile = "MOBILE"
,    Email = "EMAIL"
}


export class Meta extends SpeakeasyBase {
  @Metadata({ data: "json, name=communicationExpiry" })
  communicationExpiry?: string;

  @Metadata({ data: "json, name=communicationHint" })
  communicationHint?: string;

  @Metadata({ data: "json, name=communicationMedium" })
  communicationMedium: MetaCommunicationMediumEnum;
}
