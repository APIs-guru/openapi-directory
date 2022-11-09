import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class IpamChoicesReadPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class IpamChoicesReadRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: IpamChoicesReadPathParams;
}


export class IpamChoicesReadResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
