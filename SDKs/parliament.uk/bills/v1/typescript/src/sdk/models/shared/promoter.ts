import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Promoter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=organisationName" })
  organisationName?: string;

  @SpeakeasyMetadata({ data: "json, name=organisationUrl" })
  organisationUrl?: string;
}
