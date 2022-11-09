import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IpamPrefixesAvailablePrefixesCreatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamPrefixesAvailablePrefixesCreateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IpamPrefixesAvailablePrefixesCreatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritablePrefix;
}


export class IpamPrefixesAvailablePrefixesCreateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  prefix?: shared.Prefix;

  @Metadata()
  statusCode: number;
}
