import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IpamPrefixesAvailableIpsReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamPrefixesAvailableIpsReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IpamPrefixesAvailableIpsReadPathParams;
}


export class IpamPrefixesAvailableIpsReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  prefix?: shared.Prefix;

  @Metadata()
  statusCode: number;
}
