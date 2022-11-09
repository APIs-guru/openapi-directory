import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAdministrationEntityHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Token" })
  token?: string;
}


export class GetAdministrationEntityRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetAdministrationEntityHeaders;
}


export class GetAdministrationEntityResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Entity })
  entities?: shared.Entity[];

  @Metadata()
  statusCode: number;
}
