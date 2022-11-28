import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetDomainsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class GetDomainsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetDomainsHeaders;
}


export class GetDomainsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Domain })
  domains?: shared.Domain[];

  @SpeakeasyMetadata()
  statusCode: number;
}
