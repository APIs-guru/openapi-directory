import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetRegistrierkassePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=registrierkasseUuid" })
  registrierkasseUuid: string;
}


export class GetRegistrierkasseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetRegistrierkassePathParams;
}


export class GetRegistrierkasseResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  registrierkasse?: shared.Registrierkasse;

  @Metadata()
  statusCode: number;
}
