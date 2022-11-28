import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetBelegPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=belegUuid" })
  belegUuid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=registrierkasseUuid" })
  registrierkasseUuid: string;
}


export class GetBelegRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetBelegPathParams;
}


export class GetBelegResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  beleg?: shared.Beleg;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
