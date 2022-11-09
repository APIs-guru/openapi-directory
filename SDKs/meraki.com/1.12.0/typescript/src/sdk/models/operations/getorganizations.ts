import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetOrganizationsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getOrganizations200ApplicationJsonObject?: Map<string, any>;
}
