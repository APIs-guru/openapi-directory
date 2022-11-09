import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IpamPrefixesAvailableIpsCreatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamPrefixesAvailableIpsCreateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IpamPrefixesAvailableIpsCreatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritablePrefix;
}


export class IpamPrefixesAvailableIpsCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  prefix?: shared.Prefix;

  @Metadata()
  statusCode: number;
}
