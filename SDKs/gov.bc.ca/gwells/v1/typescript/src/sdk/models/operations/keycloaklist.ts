import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class KeycloakListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
