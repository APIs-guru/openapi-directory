import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class IpamPrefixesUpdatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamPrefixesUpdateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IpamPrefixesUpdatePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.WritablePrefix;
}


export class IpamPrefixesUpdateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  prefix?: shared.Prefix;

  @Metadata()
  statusCode: number;
}
