import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDomainPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=domainId" })
  domainId: string;
}


export class GetDomainHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Training-Key" })
  trainingKey: string;
}


export class GetDomainRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetDomainPathParams;

  @Metadata()
  headers: GetDomainHeaders;
}


export class GetDomainResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  domain?: shared.Domain;

  @Metadata()
  statusCode: number;
}
