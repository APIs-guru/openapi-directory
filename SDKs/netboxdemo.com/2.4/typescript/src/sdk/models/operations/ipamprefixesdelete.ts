import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class IpamPrefixesDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class IpamPrefixesDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IpamPrefixesDeletePathParams;
}


export class IpamPrefixesDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
