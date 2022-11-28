import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serverInfoRepresentation?: shared.ServerInfoRepresentation;

  @SpeakeasyMetadata()
  statusCode: number;
}
