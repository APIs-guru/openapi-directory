import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAdministrationEntityHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class GetAdministrationEntityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetAdministrationEntityHeaders;
}


export class GetAdministrationEntityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Entity })
  entities?: shared.Entity[];

  @SpeakeasyMetadata()
  statusCode: number;
}
