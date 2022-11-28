import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRegistrierkassePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=registrierkasseUuid" })
  registrierkasseUuid: string;
}


export class GetRegistrierkasseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRegistrierkassePathParams;
}


export class GetRegistrierkasseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  registrierkasse?: shared.Registrierkasse;

  @SpeakeasyMetadata()
  statusCode: number;
}
