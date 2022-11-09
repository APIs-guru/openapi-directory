import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Promoter extends SpeakeasyBase {
  @Metadata({ data: "json, name=organisationName" })
  organisationName?: string;

  @Metadata({ data: "json, name=organisationUrl" })
  organisationUrl?: string;
}
