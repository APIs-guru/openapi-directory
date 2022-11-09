import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class KeycloakListResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
