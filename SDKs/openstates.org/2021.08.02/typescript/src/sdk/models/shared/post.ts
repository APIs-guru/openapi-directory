import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Post extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=division_id" })
  divisionId: string;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=maximum_memberships" })
  maximumMemberships: number;

  @SpeakeasyMetadata({ data: "json, name=role" })
  role: string;
}
