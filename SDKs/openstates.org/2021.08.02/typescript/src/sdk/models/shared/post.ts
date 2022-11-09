import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Post extends SpeakeasyBase {
  @Metadata({ data: "json, name=division_id" })
  divisionId: string;

  @Metadata({ data: "json, name=label" })
  label: string;

  @Metadata({ data: "json, name=maximum_memberships" })
  maximumMemberships: number;

  @Metadata({ data: "json, name=role" })
  role: string;
}
