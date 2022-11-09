import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serverInfoRepresentation?: shared.ServerInfoRepresentation;

  @Metadata()
  statusCode: number;
}
