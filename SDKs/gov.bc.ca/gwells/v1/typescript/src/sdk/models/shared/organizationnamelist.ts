import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class OrganizationNameList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=org_guid" })
  orgGuid?: string;

  @SpeakeasyMetadata({ data: "json, name=org_verbose_name" })
  orgVerboseName?: string;
}
