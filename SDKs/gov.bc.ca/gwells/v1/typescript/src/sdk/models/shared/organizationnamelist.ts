import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class OrganizationNameList extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=org_guid" })
  orgGuid?: string;

  @Metadata({ data: "json, name=org_verbose_name" })
  orgVerboseName?: string;
}
