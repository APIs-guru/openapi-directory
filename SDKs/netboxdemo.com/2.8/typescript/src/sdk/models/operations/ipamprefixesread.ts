import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IpamPrefixesReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamPrefixesReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IpamPrefixesReadPathParams;
}


export class IpamPrefixesReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  prefix?: shared.Prefix;

  @Metadata()
  statusCode: number;
}
