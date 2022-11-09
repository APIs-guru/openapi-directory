import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDomainsHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class GetDomainsRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetDomainsHeaders;
}


export class GetDomainsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Domain })
  domains?: shared.Domain[];

  @Metadata()
  statusCode: number;
}
